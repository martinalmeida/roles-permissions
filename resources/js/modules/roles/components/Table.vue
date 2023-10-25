<script setup>
import { ref } from "vue";

const searchField = ref("player");
const searchValue = ref("");

const showRow = (item) => {
    document.getElementById("row-clicked").innerHTML = JSON.stringify(item);
};

const headers = [
    { text: "PLAYER", value: "player", width: 200, sortable: true },
    { text: "TEAM", value: "team", width: 200, sortable: true },
    { text: "NUMBER", value: "number", width: 200, sortable: true },
    { text: "POSITION", value: "position", width: 200, sortable: true },
    { text: "HEIGHT", value: "indicator.height" },
    { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true },
    { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
    { text: "COUNTRY", value: "country" },
];

const items = [
    {
        player: "Kobe Bryant",
        team: "LAL",
        number: 24,
        position: "G",
        indicator: { height: "6-6", weight: 212 },
        lastAttended: "Lower Merion HS (PA)",
        country: "USA",
    },
    {
        player: "Michael Jordan",
        team: "CHI",
        number: 23,
        position: "G",
        indicator: { height: "6-6", weight: 216 },
        lastAttended: "North Carolina",
        country: "USA",
    },
    {
        player: "Shaquille O'Neal",
        team: "LAL",
        number: 34,
        position: "C",
        indicator: { height: "7-1", weight: 325 },
        lastAttended: "LSU",
        country: "USA",
    },
    {
        player: "Tim Duncan",
        team: "SAS",
        number: 21,
        position: "F/C",
        indicator: { height: "6-11", weight: 250 },
        lastAttended: "Wake Forest",
        country: "USA",
    },
    {
        player: "Larry Bird",
        team: "BOS",
        number: 33,
        position: "F",
        indicator: { height: "6-9", weight: 220 },
        lastAttended: "Indiana State",
        country: "USA",
    },
    {
        player: "Magic Johnson",
        team: "LAL",
        number: 32,
        position: "G",
        indicator: { height: "6-9", weight: 215 },
        lastAttended: "Michigan State",
        country: "USA",
    },
    {
        player: "Hakeem Olajuwon",
        team: "HOU",
        number: 34,
        position: "C",
        indicator: { height: "7-0", weight: 255 },
        lastAttended: "Houston",
        country: "Nigeria",
    },
    {
        player: "Karl Malone",
        team: "UTA",
        number: 32,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "Louisiana Tech",
        country: "USA",
    },
    {
        player: "Wilt Chamberlain",
        team: "GSW",
        number: 13,
        position: "C",
        indicator: { height: "7-1", weight: 275 },
        lastAttended: "Kansas",
        country: "USA",
    },
    {
        player: "Oscar Robertson",
        team: "MIL",
        number: 1,
        position: "G",
        indicator: { height: "6-5", weight: 220 },
        lastAttended: "Cincinnati",
        country: "USA",
    },
    {
        player: "Bill Russell",
        team: "BOS",
        number: 6,
        position: "C",
        indicator: { height: "6-10", weight: 220 },
        lastAttended: "San Francisco",
        country: "USA",
    },
    {
        player: "Kareem Abdul-Jabbar",
        team: "LAL",
        number: 33,
        position: "C",
        indicator: { height: "7-2", weight: 225 },
        lastAttended: "UCLA",
        country: "USA",
    },
    {
        player: "Dirk Nowitzki",
        team: "DAL",
        number: 41,
        position: "F",
        indicator: { height: "7-0", weight: 245 },
        lastAttended: "Germany",
        country: "Germany",
    },
    {
        player: "Charles Barkley",
        team: "PHI",
        number: 34,
        position: "F",
        indicator: { height: "6-6", weight: 252 },
        lastAttended: "Auburn",
        country: "USA",
    },
    {
        player: "Dwyane Wade",
        team: "MIA",
        number: 3,
        position: "G",
        indicator: { height: "6-4", weight: 220 },
        lastAttended: "Marquette",
        country: "USA",
    },
];
</script>

<template>
    <div class="w-full max-h-full">
        <div
            class="mx-8 mt-8 bg-white border border-gray-200 rounded-xl sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
            <div class="flex items-center">
                <h5
                    class="mb-2 text-3xl font-bold text-gray-900 dark:text-white flex-grow"
                >
                    Modulo de Roles
                </h5>
                <div class="flex space-x-2">
                    <span>Buscar:</span>
                    <input
                        class="border border-gray-400 rounded p-1 text-sm"
                        type="text"
                        placeholder="Buscar en tabla"
                        v-model="searchValue"
                    />
                </div>
            </div>

            <p
                class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400"
            >
                <DataTable
                    table-class-name="data-table"
                    buttons-pagination
                    show-index
                    v-model:items-selected="itemsSelected"
                    :headers="headers"
                    :items="items"
                    :search-field="searchField"
                    :search-value="searchValue"
                    @click-row="showRow"
                />

                <div id="row-clicked"></div>
            </p>
        </div>
    </div>
</template>

<style scoped>
.data-table {
    --easy-table-border: none;
    --easy-table-row-border: none;

    --easy-table-header-font-color: #ffffff;
    --easy-table-header-background-color: #eb3f61;

    --easy-table-body-row-hover-font-color: #eb3f61;
    --easy-table-body-row-hover-background-color: #fbf1f3;
}
</style>
