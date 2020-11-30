interface IAnswer {
    text: string;
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

export type {IAnswer};
