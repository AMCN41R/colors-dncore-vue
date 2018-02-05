export namespace ColorsApi {

    export async function getColors(): Promise<IColor[]> {
        const response = await fetch("api/colors");
        return await response.json();
    }
}

export interface IColor {
    id: number;
    name: string;
}