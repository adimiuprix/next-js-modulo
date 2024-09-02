import prisma from "@/lib/prisma"

async function loadData(){
    // Menemukan semua data
    const dataUser = await prisma.user.findMany();

    // Menemukan data dengan where
    // const dataUser = await prisma.user.findMany({
    //     where: {
    //         email: 'garol@gmail.com'
    //     }
    // });

    return dataUser;
}

async function TampilData(){
    const user = await loadData()

    return(
        <>
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Tampil Data dari database</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {user.map((item, index) => (
                <div key={index} className="card bg-white shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{item.email}</h2>
                        <p>{item.name}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default TampilData