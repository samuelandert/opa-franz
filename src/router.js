import Home from './routes/Home.svelte';
import Dreams from './routes/Dreams.svelte';
import City from './routes/City.svelte';
import Events from './routes/Events.svelte';
import Enkels from './routes/Enkels.svelte';
import { writable } from 'svelte/store';
const router = {
    '/': Home,
    '/home': Home,
    '/dreams': Dreams,
    '/cities': City,
    '/events': Events,
    '/enkels': Enkels
}
export default router;
export const curRoute = writable('/home');
export const curId = writable(0);