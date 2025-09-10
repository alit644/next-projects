import { Status } from "@prisma/client";

export interface TaskBody {
    title: string;
    description: string;
    status: Status;
}