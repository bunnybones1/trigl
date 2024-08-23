import { BufferGeometry } from "three";

export default class BufferBank {
  reset() {
    this.posCursor = 0;
    this.normalCursor = 0;
    this.uvCursor = 0;
    this.faceIndexCursor = 0;
  }
  integrateAxisAligned(
    bb: BufferBank,
    scale: number,
    x: number,
    y: number,
    z: number,
    u: number
  ) {
    const faceIndexOffset = this.posCursor / 3;
    // const _inverseScale = 1 / scale;

    // this.posArr.set(bb.posArr, this.posCursor)
    const posOffset = this.posCursor;
    const bbPosArr = bb.posArr;
    for (let i3 = 0, l = bbPosArr.length; i3 < l; i3 += 3) {
      this.posArr[posOffset + i3] = bbPosArr[i3] * scale + x;
      this.posArr[posOffset + i3 + 1] = bbPosArr[i3 + 1] * scale + y;
      this.posArr[posOffset + i3 + 2] = bbPosArr[i3 + 2] * scale + z;
    }
    this.posCursor += bbPosArr.length;

    this.normalArr.set(bb.normalArr, this.normalCursor);
    this.normalCursor += bb.normalArr.length;

    this.uvArr.set(bb.uvArr, this.uvCursor);
    const uvOffset = this.uvCursor;
    const bbUvArr = bb.uvArr;
    const uvScale = Math.min(scale, 1);

    for (let i2 = 0, l = bbUvArr.length; i2 < l; i2 += 2) {
      //TODO correctly offset UVs for subTiles
      this.uvArr[uvOffset + i2] = bbUvArr[i2] * uvScale + u;
      this.uvArr[uvOffset + i2 + 1] = bbUvArr[i2 + 1] * uvScale;
    }
    this.uvCursor += bb.uvArr.length;

    const iOffset = this.faceIndexCursor;
    for (let i = 0, l = bb.faceIndexArr.length; i < l; i++) {
      this.faceIndexArr[i + iOffset] = bb.faceIndexArr[i] + faceIndexOffset;
    }
    this.faceIndexCursor += bb.faceIndexArr.length;
  }
  slicePosArr() {
    return this.posArr.slice(0, this.posCursor);
  }
  posArr: Float32Array;
  posCursor = 0;
  sliceNormalArr() {
    return this.normalArr.slice(0, this.normalCursor);
  }
  normalArr: Float32Array;
  normalCursor = 0;
  sliceUvArr() {
    return this.uvArr.slice(0, this.uvCursor);
  }
  uvArr: Float32Array;
  uvCursor = 0;
  sliceFaceIndexArr() {
    return this.faceIndexArr.slice(0, this.faceIndexCursor);
  }
  faceIndexArr: Uint32Array;
  faceIndexCursor = 0;
  constructor(geoOrCount: BufferGeometry | number = 1024) {
    let count = 0;
    let faceCount = -1;
    if (geoOrCount instanceof BufferGeometry) {
      const geo = geoOrCount;
      this.posArr = geo.attributes.position.array as Float32Array;
      this.normalArr = geo.attributes.normal.array as Float32Array;
      this.uvArr = geo.attributes.uv.array as Float32Array;
      if (geo.index) {
        const fia16 = geo.index.array;
        const fia32 = new Uint32Array(fia16.length);
        for (let i = 0; i < fia16.length; i++) {
          fia32[i] = fia16[i];
        }
        this.faceIndexArr = fia32;
      } else {
        this.faceIndexArr = new Uint32Array(0);
      }
    } else {
      count = geoOrCount;
      if (faceCount === -1) {
        faceCount = (count / 4) * 6; //assume 2 faces per 4 vertices (quads)
      }
      this.posArr = new Float32Array(count * 3);
      this.normalArr = new Float32Array(count * 3);
      this.uvArr = new Float32Array(count * 2);
      this.faceIndexArr = new Uint32Array(faceCount);
    }
  }
}
