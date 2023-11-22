<template>
    <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
            <slot name="headerContent"></slot>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div
                    class="inline-block min-w-full shadow rounded overflow-hidden"
                >
                    <slot></slot>
                </div>
            </div>
            <div
                class="px-5 py-5 flex flex-col xs:flex-row items-center xs:justify-between"
            >
                <span
                    class="text-xs xs:text-sm text-gray-900 dark:text-gray-100"
                >
                    mostrando 1 de 10 páginas
                </span>
                <div class="inline-flex mt-2 xs:mt-0">
                    <button
                        class="text-sm bg-gray-300 hover:bg-rose-500 hover:text-white text-gray-800 font-semibold py-2 px-4 rounded-l"
                    >
                        Anterior
                    </button>
                    <button
                        class="text-sm bg-gray-300 hover:bg-rose-500 hover:text-white text-gray-800 font-semibold py-2 px-4 rounded-r"
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
::-webkit-scrollbar {
    background: transparent;
    width: 10px;
    height: 10px;
}

::-webkit-scrollbar-thumb {
    background: rgba(156, 156, 156, 0.148);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: #8d8d8da4;
}
</style>
