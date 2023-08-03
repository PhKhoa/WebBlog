import { User } from "./user";

export interface Article{
    title: string;
    description: string;
    social_image: string;
    readable_publish_date: string;
    comments_count: number;
    public_reactions_count: number;
    reading_time_minutes: number;
    tag_list: string[];
    tags: string;
    user: User;
}