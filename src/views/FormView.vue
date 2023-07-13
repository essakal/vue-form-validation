<template>
  <div class="container">
    <h1>form validation</h1>
    <form action="" @submit.prevent="sub">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          class="input-field"
          v-model="username"
        />
        <span v-if="err.username" class="error">Error</span>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email" class="input-field" v-model="email" />
        <span v-if="err.email" class="error">Error</span>
      </div>

      <div class="form-group">
        <span>Sex</span>
        <div class="sexe">
          <input
            type="radio"
            id="male"
            value="male"
            class="radio-btn"
            v-model="sexe"
          />
          <label for="male">Male</label>
          <input
            type="radio"
            id="female"
            value="female"
            class="radio-btn"
            v-model="sexe"
          />
          <label for="female">Female</label>
        </div>
        <span v-if="err.sexe" class="error">Error</span>
      </div>
      <div class="form-group">
        <label for="level">Academic Level</label>
        <select id="level" class="select-field" v-model="level">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <span v-if="err.level" class="error">Error</span>
      </div>
      <div class="form-group">
        <label for="pass1">Password</label>
        <input type="password" id="pass1" class="input-field" v-model="pass1" />
        <span v-if="err.pass1" class="error">Error</span>
      </div>
      <div class="form-group">
        <label for="pass2">Confirm Password</label>
        <input type="password" id="pass2" class="input-field" v-model="pass2" />
        <span v-if="err.pass2" class="error">Error</span>
        <span v-if="err.vpass" class="error">Passwords do not match</span>
      </div>
      <div class="form-group">
        <input type="submit" value="Submit" class="submit-btn" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      sexe: "",
      level: "",
      pass1: "",
      pass2: "",
      err: {
        username: false,
        email: false,
        sexe: false,
        level: false,
        pass1: false,
        pass2: false,
        vpass: false,
      },
    };
  },
  methods: {
    sub() {
      if (
        this.username == "" ||
        this.email == "" ||
        this.sexe == "" ||
        this.level == "" ||
        this.pass1 == "" ||
        this.pass2 == ""
      ) {
        if (this.username == "") this.err.username = true;
        if (this.email == "") this.err.email = true;
        if (this.sexe == "") this.err.sexe = true;
        if (this.level == "") this.err.level = true;
        if (this.pass1 == "") this.err.pass1 = true;
        if (this.pass2 == "") this.err.pass2 = true;
      } else {
        if (this.pass1 !== this.pass2) {
          this.err.username = false;
          this.err.email = false;
          this.err.sexe = false;
          this.err.level = false;
          this.err.pass1 = false;
          this.err.pass2 = false;
          this.err.vpass = true;
        } else {
          console.log("kolchi mezyan");
          this.err.username = false;
          this.err.email = false;
          this.err.sexe = false;
          this.err.level = false;
          this.err.pass1 = false;
          this.err.pass2 = false;
          this.err.vpass = false;
          this.username = "";
          this.email = "";
          this.sexe = "";
          this.level = "";
          this.pass1 = "";
          this.pass2 = "";
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 400px;
  margin: 0 auto;
}

.container h1 {
  text-align: center;
  margin-bottom: 20px;
}

.container form {
  display: flex;
  flex-direction: column;
}

.container .form-group {
  margin-bottom: 10px;
}

.container label {
  display: block;
  font-weight: bold;
}

.container .input-field,
.container .radio-btn,
.container .select-field {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
}

.container .error {
  color: red;
}

.container .submit-btn {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
