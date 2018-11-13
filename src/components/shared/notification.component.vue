<template functional>
    <div class="container">
        <div class="colums">
            <div class="column">
                <div class="notification is-danger">
                    <slot name="body">
                        something went wrong
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>