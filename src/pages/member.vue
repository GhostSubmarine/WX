<template>
    <div>
        <div class="FlexWrapper"> 
            <div class="FlexItems FlexOne">I am content in the inner Flexbox 
            1.</div> 
            <div class="FlexItems FlexTwo">I am content in the inner Flexbox 
            2.</div> 
            <div class="FlexItems FlexThree">I am content in the inner Flexbox 
            3.</div> 
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .FlexItems { 
    border: 1px solid #ebebeb; 
    background-color: #34005B; 
    display: flex; 
    height: 100px; 
    } 
    .FlexOne { 
    flex: 1 0 auto; 
    } 
    .FlexTwo, 
    .FlexThree { 
    flex: 1 0 auto; 
    }

</style>