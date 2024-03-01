<template>
  <div>
    <h1>Usuarios</h1>
    <img
      class="imagen"
      src="https://hips.hearstapps.com/hmg-prod/images/propositos-moda-tendencia-1-1672662382.jpg"
      alt="Imagen de ejemplo"
    />
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Nombre de usuario</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ConsumoApi",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Error al obtener usuarios");
        }
        const data = await response.json();
        this.users = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos del componente */
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.imagen {
  width: 900px;
  height: 600px;
}
</style>
