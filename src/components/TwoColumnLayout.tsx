import { ReactNode } from 'react';

type Props = {
    leftContent: ReactNode;
    rightComponent: ReactNode;
};

export default function TwoColumnLayout({ leftContent, rightComponent }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 opacity-25">
            <div className="flex flex-col justify-center border border-green-600 ">
                {leftContent}
            </div>

            <div className="flex flex-col justify-center items-center border border-green-600">
                {rightComponent}
            </div>
        </div>
    );
}
