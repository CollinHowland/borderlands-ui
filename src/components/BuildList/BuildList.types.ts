import { BuildVO } from "../../models/vos/BuildVO";

export interface IBuildListInput {
    builds: BuildVO[]
}

export interface IBuildListEvents {

}

export type BuildListProps = IBuildListInput & IBuildListEvents