import './index.scss'

function printStr(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str)
    }, 1000)
  })
}


async function printAll() {
  const a = await printStr('str 1')
  const b = await printStr('str 2')
  console.log(a, b)
}

printAll()
