async function getDataFromApi() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  if (!response.ok) {
    throw new Error('Gagal mendapatkan data')
  }

  return response.json() // Mengubah data dari API menjadi format JSON
}

async function TodoPage(){

  const data = await getDataFromApi() // Ambil data dari API

  return (
    <main className="container p-4 mx-auto mt-10">
      <h1 className="mb-4 text-2xl font-bold">Data tunggal</h1>
      <div className="p-4 bg-white rounded shadow-md">
        <p><strong>ID:</strong> {data.id}</p>
        <p><strong>Title:</strong> {data.title}</p>
        <p><strong>Completed:</strong> {data.completed ? 'Yes' : 'No'}</p>
      </div>
    </main>
  )
}

export default TodoPage
