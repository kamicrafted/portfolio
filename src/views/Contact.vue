<script>
import { defineComponent } from 'vue'
import { FormKit } from '@formkit/vue';
import { ref } from 'vue'
import { useStringStore } from '../stores/strings';
import emailjs from '@emailjs/browser';

// console.log(contactStrings.strings.contact.heading)

document.body.classList.remove(...document.body.classList);
document.body.classList.add('template-contact');

export default {
  setup() {
    const submitted = ref(false);

    const contactStrings = useStringStore()

    return {
      contactStrings,
      submitted,
    }
  },

  methods: {
    sendEmail() {
      emailjs.sendForm('service_q4286ej', 'template_kami_contact', this.$refs.form, 'DoB7xMJYZbxl9R5UI')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            submitted.value = true
        }, (error) => {
            console.log('FAILED...', error.text);
      });
    }
  }
}
</script>
<template>
  <main id="contact">
    <img class="keyart" src="../assets/img/kami-stamp.png" alt="">
    <div class="form">
      <h1>{{ contactStrings.strings.contact.heading }}</h1>
      <p>{{ contactStrings.strings.contact.instructions }}</p>

      <FormKit
        type="form"
        id="registration-example"
        :form-class="submitted ? 'hide' : 'show'"
        submit-label="Submit"
        @submit.prevent="sendEmail"
        #default="{ disabled }"
      >

      <FormKit
        type="text"
        name="name"
        label="Name"
        placeholder="Your name"
        validation="required|alpha"
      />

      <FormKit
        type="email"
        name="email"
        label="Email"
        placeholder="Your email"
        validation="required|*email"
        validation-visibility="live"
      />

      <FormKit
        outer-class="formkit-select-outer"
        :wrapper-class="{
          'formkit-select-wrapper': true,
          '': false
        }"
        type="select"
        label="Subject"
        name="subject"
        :options="[
          'Monaco',
          'Vatican City',
          'Maldives',
          'Tuvalu',
        ]"
      />

      <FormKit
        type="textarea"
        label="Message"
        rows="10"
        auto-height
        placeholder="Enter your message"
      />
      
      <!-- <pre wrap>{{ value }}</pre> -->
      </FormKit>

      <!-- <form id="contact-form" action="">
        <input class="field" type="text" placeholder="Your name">
        <input class="field" type="email" placeholder="Your email">
        <select class="field" name="" id="">
          <option value="">option</option>
          <option value="">option</option>
          <option value="">option</option>
        </select>
        <textarea class="field" name="" id="" placeholder="Message"></textarea>

        <div class="form-action">
          <button class="button">Submit</button>
        </div>
      </form> -->
    </div>
  </main>
</template>

<style lang="scss">
main {
  max-width: 1200px;
  width: 100%;
}

.form {
  position: relative;
  z-index: 1;
  min-width: 40vh;
  width: 100%;

  > p {
    margin-bottom: 1rem;
  }
}

#contact-form {
  display: flex;
  flex-direction: column;
}

.keyart {
  position: relative;
  top: 5%;
  width: 100%;
  max-height: 50vh;
  margin-right: 2rem;
}
@media (min-width: 1024px) {
}
</style>
