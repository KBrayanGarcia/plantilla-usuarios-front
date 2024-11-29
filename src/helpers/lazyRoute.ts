
/**
 * @param importFn - Función que importa el módulo
 * @param componentName - Nombre del componente exportado por el módulo que se desea importar de forma perezosa, por ejemplo "default"
 * @returns Función que devuelve el componente
 * 
 * @example
 * lazyRoute(() => import("../../pages/admin/login/LoginPage"), "default");
 * lazyRoute(() => import("../../pages/admin/login/LoginPage"), "Prueba");
 * 
 * ComponentPrueba.tsx
 * 
 * const Login = () => <p>prueba</p>
 * export const Prueba = () => <p>prueba</p>
 * 
 * export default Login
 */
export const lazyRoute =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <T = any>(importFn: () => Promise<T>, componentName: keyof T) =>
    async () => {
        const module = await importFn();
            return { Component: module[componentName] };
        };
