import BufferBank from "./BufferBank";

let sharedBufferBank: BufferBank;
export function getSharedBufferBank() {
  if (!sharedBufferBank) {
    sharedBufferBank = new BufferBank(10000000);
  }
  return sharedBufferBank;
}
