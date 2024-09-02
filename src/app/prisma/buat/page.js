"use client"
import { useState } from "react";
import { newUser } from "@/lib/action";

function FormCreate() {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Panggil fungsi newUser dengan data dikumpulkan
        await newUser({ name, email });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Create User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-full mt-4"
                    >
                        Buat User
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormCreate