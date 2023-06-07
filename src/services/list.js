export async function getList() {
  let response

  try {
    response = await fetch('https://jsonplaceholder.typicode.com/users')
  } catch (error) {
    console.log('There was an error', error)
  }

// Uses the 'optional chaining' operator
  if (response?.ok) {
    console.log('Use the response here!')
    return response.json()
  } else {
    console.log(`HTTP Response Code: ${response?.status}`)
    return []
  }
}