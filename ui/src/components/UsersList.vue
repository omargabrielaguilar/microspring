<template>
  <div>
    <h2>Users</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.firstName }} {{ user.lastName }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { getAllUsers } from "@/services/userService";
import { User } from "@/types"; // Definir un tipo User en src/types.ts

export default defineComponent({
  name: "UsersList",
  setup() {
    const users = ref<User[]>([]);

    onMounted(async () => {
      users.value = await getAllUsers();
    });

    return {
      users
    };
  }
});
</script>

<style scoped></style>
