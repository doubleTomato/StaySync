"use client";
import * as Checkbox from '@radix-ui/react-checkbox';
import { MdCheck } from 'react-icons/md';

export default function CCheckbox({ label, id }: { label: string, id: string }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      <Checkbox.Root
        id={id}
        className="flex h-6 w-6 appearance-none items-center justify-center rounded-md border-2 border-gray-300 bg-white outline-none transition-all
                   data-[state=checked]:bg-black data-[state=checked]:border-black
                   hover:border-black focus:ring-2 focus:ring-gray-400"
      >
        <Checkbox.Indicator className="text-white">
          <MdCheck size={18} />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <label
        className="text-sm font-medium leading-none cursor-pointer text-gray-700 group-hover:text-black transition-colors"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}