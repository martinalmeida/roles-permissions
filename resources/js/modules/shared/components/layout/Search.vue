<template>
    <div
        class="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5"
    >
        <div class="relative mt-2">
            <input
                type="text"
                class="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm"
                placeholder="Busqueda de paginas"
            />
            <svg
                viewBox="0 0 24 24"
                class="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </div>
        <div class="space-y-4 mt-3">
            <button
                class="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow"
            >
                <div
                    class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full"
                >
                    Sub Modulo
                </div>
                <div class="flex items-center w-full">
                    <div
                        class="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md"
                    >
                        Nombre del Modulo
                    </div>
                </div>
            </button>
        </div>
    </div>
</template>
