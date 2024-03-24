
export type BuildMode = 'production' | 'development';

export interface BuildPatchs {
    entry: string;
    build: string;
    html: string;
};

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPatchs;
    isDev: boolean;
}