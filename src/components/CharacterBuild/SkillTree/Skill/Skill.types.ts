import { SkillVO } from "../../../../models/vos/SkillVO";

export interface ISkillInput {
    imagePath: string,
    skill: SkillVO,
}

export interface ISkillEvents {

}

export type SkillProps = ISkillInput & ISkillEvents