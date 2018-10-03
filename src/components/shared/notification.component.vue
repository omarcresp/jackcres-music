<template functional>
    <div class="container">
        <div class="colums">
            <div class="column">
                <div class="notification is-danger">
                    <slot name="body">
                        Algo anduvo mal
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>