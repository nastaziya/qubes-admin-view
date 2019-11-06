<template>
    <div>
        <div class="sidebar sidebar-dark bg-dark">
            <ul class="list-unstyled">
                <li>
                    <router-link to="/" class="nav-link"><font-awesome-icon :icon="['fa', 'home']" /> Home</router-link>
                </li>
                <li>
                    <router-link to="/forms" class="nav-link"><font-awesome-icon :icon="['fa', 'edit']" /> Forms</router-link>
                </li>
                <li>
                    <router-link to="/alerts" class="nav-link"><font-awesome-icon :icon="['fa', 'comment-alt']" /> Alerts</router-link>
                </li>
                <li>
                    <router-link to="/tables" class="nav-link"><font-awesome-icon :icon="['fa', 'table']" /> Tables</router-link>
                </li>
                <li>
                    <router-link to="/login" class="nav-link"><font-awesome-icon :icon="['fa', 'sign-in-alt']" /> Login</router-link>
                </li>
                <li>
                    <router-link to="/register" class="nav-link"><font-awesome-icon :icon="['fa', 'user-plus']" /> Register</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        mounted () {}
    }
</script>