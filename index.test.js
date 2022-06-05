import assert from 'assert'

const runTestes = async () => {
  const expected = 'Hello World!\n'
  const resp = await fetch('http://localhost:3000')
  const data = await resp.text()

  assert.equal(data, expected)
}

runTestes()