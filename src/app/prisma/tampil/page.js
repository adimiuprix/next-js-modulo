import prisma from "@/lib/prisma"

async function loadData(){
    const dataUser = await prisma.user.findMany();

    return dataUser;
}

async function TampilData(){
    const user = await loadData()
    return(
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    )
}

export default TampilData