export function getUrl<T>(template: string, params: T): string {
    let res = template;
    for (const key in params) {
        res = res.replace(`:${key}`, `${params[key]}`);
    }
    return res
}