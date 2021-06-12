<template>
  <div class="label-box" :class="[inputValue === label ? 'label-container-selected' : '']">
      <svg v-if="inputValue === label" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.272 4.56607C11.1087 4.5326 11.9212 4.85029 12.5133 5.44235L16.8062 9.73528C17.9778 10.9069 17.9778 12.8063 16.8062 13.9779L13.9778 16.8063C12.8062 17.9779 10.9067 17.9779 9.73514 16.8063L5.44221 12.5134C4.85015 11.9214 4.53246 11.1088 4.56592 10.2722L4.7485 5.70787C4.76933 5.18698 5.18683 4.76948 5.70773 4.74864L10.272 4.56607Z" stroke="white" stroke-width="1.5"/>
        <circle cx="8.83789" cy="8.47278" r="0.625" stroke="white" stroke-width="1.5"/>
      </svg>
      <svg v-if="inputValue !== label" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.272 4.56607C11.1087 4.5326 11.9212 4.85029 12.5133 5.44235L16.8062 9.73528C17.9778 10.9069 17.9778 12.8063 16.8062 13.9779L13.9778 16.8063C12.8062 17.9779 10.9067 17.9779 9.73514 16.8063L5.44221 12.5134C4.85015 11.9214 4.53246 11.1088 4.56592 10.2722L4.7485 5.70787C4.76933 5.18698 5.18683 4.76948 5.70773 4.74864L10.272 4.56607Z" stroke="#6833FF" stroke-width="1.5"/>
        <circle cx="8.83789" cy="8.47278" r="0.625" stroke="#6833FF" stroke-width="1.5"/>
      </svg>
      <div class="label-item">{{ label }}</div>
  </div>
</template>

<script>
export default {
    name: 'Label',
    props: ['label', 'inputValue']
}
</script>

<style>
.label-box {
    position: relative;
    display: flex;
    align-items: center;
    height: 32px;
    margin-top: 20px;
    margin-right: 16px;
}
.label-item {
    margin: 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.75px;
}
.label-container-selected {
    background-color: #6833FF;
    border-radius: 40px;
    color: white;
    padding-left: 10px;
    padding-right: 10px;
}
.label-img {
    position: absolute;
    left: 41.6%;
    right: -16.6%;
    top: 6.25%;
    bottom: 43.75%;

    border: 1.5px solid #FFFFFF;
    border-radius: 3px;
    transform: rotate(45deg);
}
</style>