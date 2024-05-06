describe('Demo test', () => {
  it('should pass', () => {
    expect(2 + 2).toBe(4)
  })

  it('will fail', () => {
    throw new Error('Test failed')
  })

  it('should pass 2', () => {
    expect(2 + 3).toBe(5)
  })
})
