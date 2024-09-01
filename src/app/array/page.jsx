import dataArray from "./DataArray"

async function Array(){
    const data = await dataArray()

    return(
        <>
        <main className="container p-4 mx-auto mt-10">
            <h1 className="mb-4 text-2xl font-bold">Data array</h1>

            {data.map((item) => (
            <div className="p-4 mb-5 bg-white rounded shadow-md">
                <p><strong>Id:</strong> {item.id}</p>
                <p><strong>Judul:</strong> {item.title}</p>
                <p><strong>Genre:</strong> {item.genre}</p>
                <p><strong>Platform:</strong> {item.platform}</p>
            </div>
            ))}

        </main>
        </>
    )
}

export default Array