// const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
// const CategoryList = () => import('./components/category/List.vue' /* webpackChunkName: "resource/js/components/category/list" */)
// const CategoryCreate = () => import('./components/category/Add.vue' /* webpackChunkName: "resource/js/components/category/add" */)
// const CategoryEdit = () => import('./components/category/Edit.vue' /* webpackChunkName: "resource/js/components/category/edit" */)

// import CompaniesEdit from './components/companies/CompaniesEdit.vue';
import Welcome from './components/Welcome.vue'; /* webpackChunkName: "resource/js/components/welcome" */
import CategoryList from './components/category/List.vue'; /* webpackChunkName: "resource/js/components/category/list" */
import CategoryCreate from './components/category/Add.vue'; /* webpackChunkName: "resource/js/components/category/add" */
import CategoryEdit from './components/category/Edit.vue'; /* webpackChunkName: "resource/js/components/category/edit" */

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'categoryList',
        path: '/category',
        component: CategoryList
    },
    {
        name: 'categoryEdit',
        path: '/category/:id/edit',
        component: CategoryEdit
    },
    {
        name: 'categoryAdd',
        path: '/category/add',
        component: CategoryCreate
    }
]
