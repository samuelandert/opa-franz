import Home from './routes/Home.svelte';
import Dreams from './routes/Dreams.svelte';
import City from './routes/City.svelte';
import Events from './routes/Events.svelte';
import { writable } from 'svelte/store';
const router = {
    '/': Home,
    '/home': Home,
    '/dreams': Dreams,
    '/cities': City,
    '/events': Events
}
export default router;
export const curRoute = writable('/home');