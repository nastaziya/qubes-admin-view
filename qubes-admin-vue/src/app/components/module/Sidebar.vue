<template>
    <div>
        <div class="sidebar">
            <nav class="sidebar-nav">
                <ul class="nav flex-column">
                    <li class="nav-item ">
                        <router-link to="/" class="nav-link" ><font-awesome-icon :icon="['fa', 'home']" /> Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/forms" class="nav-link"><font-awesome-icon :icon="['fa', 'edit']" /> Forms</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/alerts" class="nav-link"><font-awesome-icon :icon="['fa', 'comment-alt']" /> Alerts</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/tables" class="nav-link"><font-awesome-icon :icon="['fa', 'table']" /> Tables</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link"><font-awesome-icon :icon="['fa', 'sign-in-alt']" /> Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link"><font-awesome-icon :icon="['fa', 'user-plus']" /> Register</router-link>
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