<template>
    <div>
        <div class="sidebar">
            <nav class="sidebar-nav">
                <ul class="nav flex-column">
                    <li class="nav-item ">
                        <router-link to="/" class="nav-link" ><font-awesome-icon :icon="['fa', 'home']" /> Home</router-link>
                    </li>
                     <li class="nav-item">
                        <router-link to="/createvm" class="nav-link"><font-awesome-icon :icon="['fa', 'sign-in-alt']" /> New VM</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/pools" class="nav-link"><font-awesome-icon :icon="['fa', 'comment-alt']" /> Pools</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/labels" class="nav-link"><font-awesome-icon :icon="['fa', 'table']" /> Labels</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        mounted () {}
    }
</script>