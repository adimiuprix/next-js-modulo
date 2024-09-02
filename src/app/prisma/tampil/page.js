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
            <div className="flex">
                {user.map((item, index) => (
                <div key={index} className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{item.email}</h2>
                        <p>{item.name}</p>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}

export default TampilData