<script setup lang='ts'>
import emailjs from '@emailjs/browser';
const feedForm = reactive({
  name: '',
  phone: '',
  question: '',
})
const validate = reactive({
  name: false,
  phone: false,
  question: false,
})
const btnLoading = ref(false)
const showMessage = reactive({
  value: false,
  type: 'success'
})
const form = ref()
function sendEmail() {
  //校验
  if (!feedForm.name) {
    validate.name = true
    return
  } else {
    validate.name = false
  }
  if (!feedForm.phone || !/^1[3456789]\d{9}$/.test(feedForm.phone)) {
    validate.phone = true
    return
  } else {
    validate.phone = false
  }
  if (!feedForm.question) {
    validate.question = true
    return
  } else {
    validate.question = false
  }
  btnLoading.value = true
  emailjs.sendForm('service_d75f8zh', 'template_bt4qin8', form.value, 'iMtk7jHirSe3JbXHu')
    .then((result) => {
      showMessage.value = true
      showMessage.type = 'success'
    }, (error) => {
      showMessage.value = true
      showMessage.type = 'error'
    }).finally(() => {
      setTimeout(() => {
        showMessage.value = false
        btnLoading.value = false
      }, 3000);
    });
}
</script>

<template>
  <div class="form-wrap  f-c-c">
    <Transition enter-active-class="animate__animated animate__slideInLeft">
      <div class="showMessage p-3 fixed top-26 right-10 sd-8-1 bg-white max-w-80" v-if="showMessage.value">
        <h2 class="text-xl " :class="showMessage.type === 'success' ? 'text-green-400' : 'text-red-400'">{{
          $t(`message.${showMessage.type}.title`) }}</h2>
        <p class="mt-2">{{ $t(`message.${showMessage.type}.desc`) }}</p>
      </div>
    </Transition>
    <form ref="form" @submit.prevent="sendEmail"
      class="grid grid-cols-1 gap-8 p-4 pr-8 md:(gap-8 py-8 px-15  w-2/5) sd-6-1 rounded-sm mx-auto    my-10">
      <h2 class="text-3xl mb-4 text-center">{{ $t('feedbackTitle') }}</h2>
      <div class="f-s-c relative">
        <label class="bg-cxp-org/50  py-3 w-15 md:w-20 text-center  ">{{ $t('form.name') }}</label>
        <input class="bg-gray-100 shadow-inner  py-3 px-4 flex-1 " type="text" v-model.trim="feedForm.name" name="name"
          :placeholder="$t('form.pname')">
        <p class="absolute -bottom-5   left-14 text-red-500" v-if="validate.name">{{$t('form.pname')}}</p>
      </div>
      <div class="f-s-c relative">
        <label class="bg-cxp-org/50  py-3 w-15 md:w-20 text-center  ">{{ $t('form.phone') }}</label>
        <input class="bg-gray-100 shadow-inner  py-3 px-4 flex-1 " type="text" v-model.trim="feedForm.phone" name="phone"
          :placeholder="$t('form.pphone')">
        <p class="absolute -bottom-5   left-14 text-red-500" v-if="validate.phone">{{ $t('form.pformat') }}</p>
      </div>
      <div class="f-s-c relative ">
        <label class="bg-cxp-org/50  py-3 w-15 md:w-20 text-center  ">{{ $t('form.question') }}</label>
        <textarea class="bg-gray-100 shadow-inner  py-3 px-4 flex-1 " v-model.trim="feedForm.question" name="question"
          :placeholder="$t('form.pquestion')"></textarea>
        <p class="absolute -bottom-5   left-14 text-red-500" v-if="validate.question">{{ $t('form.pquestion') }}</p>

      </div>
      <div class="f-c-c   mt-4 ">
        <button type="submit" class="f-c-c mx-auto bg-blue-400  rounded-md px-4 shadow-inner py-7px"
          :value="$t('form.submit')">
          <Loading v-if="btnLoading" class="loading wh-5 text-white " />
          <span v-else :class="btnLoading ? 'text-blue-400' : 'text-white'">{{ $t('form.submit') }}</span>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped lang='scss'>
.form-wrap {
  min-height: calc(100vh - 64px - 328px)
}

.loading {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg)
  }
}</style>
