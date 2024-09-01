
export default function Parshing() {
    return (
      <>
      <nav class="p-4 bg-blue-500">
          <div class="container flex justify-between items-center mx-auto">
              <a href="#" class="text-lg font-semibold text-white">Next Modulo</a>
              <ul class="flex space-x-4">
                  <li><a href="/" class="text-white hover:text-gray-300">Beranda</a></li>
                  <li><a href="/parshing" class="text-white hover:text-gray-300">Parshing</a></li>
              </ul>
          </div>
      </nav>
  
      <main class="container p-4 mx-auto mt-10">
          <div class="p-6 bg-white rounded-lg shadow-md">
              <h1 class="mb-4 text-2xl font-bold">Parshing data</h1>
              <p class="text-gray-700">This is a starter page created with Tailwind CSS. You can start building your application here.</p>
          </div>
      </main>
      </>
    )
  }
  