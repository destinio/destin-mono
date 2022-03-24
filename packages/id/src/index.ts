function id(): string {
  const randomNumber = String(Math.floor(Math.random() * 1000000000)).padStart(10, '0')
  return `${randomNumber}-${Date.now()}`
}

export { id }
