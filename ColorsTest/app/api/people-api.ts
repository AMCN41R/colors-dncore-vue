import { IColor } from "./colors-api";

export namespace PeopleApi {

    export async function getPeople(): Promise<IPerson[]> {
        const response = await fetch("api/people");
        return await response.json();
    }

    export async function getPerson(id: number): Promise<IPerson> {
        const response = await fetch(`api/people/${id}`);
        return await response.json();
    }

    export async function updatePerson(person: IPerson): Promise<void> {
        await fetch(`api/people/${person.id}`, {
            method: "POST",
            body: JSON.stringify(person),
            headers: {
                "Content-Type": "application/json"
            },
        });
    }
}

export interface IPerson {
    id: number;
    firstName: string;
    lastName: string;
    isAuthorised: boolean;
    isValid: boolean;
    isEnabled: boolean;
    fullName: string;
    isPalindrome: boolean;
    colors: IColor[];
}