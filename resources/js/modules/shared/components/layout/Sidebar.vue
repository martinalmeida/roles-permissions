<template>
    <div
        class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm"
    >
        <div
            class="bg-white dark:bg-gray-900 dark:border-gray-800 w-20 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex"
        >
            <div class="h-16 text-blue-500 flex items-center justify-center">
                <img
                    src="../../../../static/logo.png"
                    alt="TransTrackMaster"
                    width="50%"
                    height="50%"
                />
            </div>
            <div
                class="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4"
            >
                <button
                    class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
                <button
                    class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center"
                >
                    <svg
                        viewBox="0 0 24 24"
                        class="h-5"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                        ></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                </button>
                <button
                    class="h-10 w-12 dark:bg-gray-700 dark:text-white rounded-md flex items-center justify-center bg-blue-100 text-blue-500"
                >
                    <svg
                        viewBox="0 0 24 24"
                        class="h-5"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <rect
                            x="2"
                            y="7"
                            width="20"
                            height="14"
                            rx="2"
                            ry="2"
                        ></rect>
                        <path
                            d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                        ></path>
                    </svg>
                </button>
                <button
                    class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center"
                >
                    <svg
                        viewBox="0 0 24 24"
                        class="h-5"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                        ></path>
                        <line x1="12" y1="11" x2="12" y2="17"></line>
                        <line x1="9" y1="14" x2="15" y2="14"></line>
                    </svg>
                </button>
                <button
                    class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center"
                >
                    <svg
                        viewBox="0 0 24 24"
                        class="h-5"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                </button>
            </div>
        </div>
        <div class="flex-grow overflow-hidden h-full flex flex-col">
            <slot></slot>
        </div>
    </div>
</template>
