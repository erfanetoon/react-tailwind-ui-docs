import { IconButton, useTheme } from "@erfanetoon/react-tailwind-ui";
import { IIconButtonProps, TColors } from "@erfanetoon/react-tailwind-ui";
import { useState } from "react";
import Highlight from "react-highlight";
import { TbMagnet } from "react-icons/tb";

const IconButtonComponent = () => {
    const { global, button } = useTheme();

    const [color, setColor] = useState<TColors | null>(null);
    const [variant, setVariant] = useState<IIconButtonProps["variant"] | null>(
        null,
    );
    const [size, setSize] = useState<IIconButtonProps["size"] | null>(null);

    return (
        <div className="">
            <Highlight className="direction-ltr rounded-2xl shadow">
                {`
<IconButton 
      color="${color || global?.color}"
      size="${size || button?.defaultProps?.variant}"
      variant="${variant || button?.defaultProps?.size}"
>
{... any icon}
</IconButton>
                `}
            </Highlight>

            <IconButton
                {...(color ? { color } : {})}
                {...(variant ? { variant } : {})}
                {...(size ? { size } : {})}
                className="mt-8">
                <TbMagnet />
            </IconButton>

            <div className="flex items-center mt-8">
                <div className="mx-2">
                    <span className="w-full">Color</span>
                    <select
                        name="color"
                        id="color"
                        className="w-full"
                        value={color || ""}
                        onChange={(e) =>
                            setColor((e.currentTarget.value || null) as any)
                        }>
                        <option value="">Not set - use from theme</option>
                        <option
                            className="bg-primary-600 text-white"
                            value="primary">
                            Primary
                        </option>
                        <option
                            className="bg-secondary-600 text-white"
                            value="secondary">
                            Secondary
                        </option>
                        <option
                            className="bg-tertiary-600 text-white"
                            value="tertiary">
                            Tertiary
                        </option>
                        <option
                            className="bg-amber-600 text-white"
                            value="amber">
                            amber
                        </option>
                        <option className="bg-blue-600 text-white" value="blue">
                            Blue
                        </option>
                        <option className="bg-cyan-600 text-white" value="cyan">
                            Cyan
                        </option>
                        <option
                            className="bg-emerald-600 text-white"
                            value="emerald">
                            Emerald
                        </option>
                        <option
                            className="bg-fuchsia-600 text-white"
                            value="fuchsia">
                            Fuchsia
                        </option>
                        <option className="bg-gray-600 text-white" value="gray">
                            Gray
                        </option>
                        <option
                            className="bg-green-600 text-white"
                            value="green">
                            Green
                        </option>
                        <option
                            className="bg-indigo-600 text-white"
                            value="indigo">
                            Indigo
                        </option>
                        <option className="bg-lime-600 text-white" value="lime">
                            Lime
                        </option>
                        <option
                            className="bg-neutral-600 text-white"
                            value="neutral">
                            Neutral
                        </option>
                        <option
                            className="bg-orange-600 text-white"
                            value="orange">
                            Orange
                        </option>
                        <option className="bg-pink-600 text-white" value="pink">
                            Pink
                        </option>
                        <option
                            className="bg-purple-600 text-white"
                            value="purple">
                            Purple
                        </option>
                        <option className="bg-red-600 text-white" value="red">
                            Red
                        </option>
                        <option className="bg-rose-600 text-white" value="rose">
                            Rose
                        </option>
                        <option className="bg-sky-600 text-white" value="sky">
                            Sky
                        </option>
                        <option
                            className="bg-slate-600 text-white"
                            value="slate">
                            Slate
                        </option>
                        <option
                            className="bg-stone-600 text-white"
                            value="stone">
                            Stone
                        </option>
                        <option className="bg-teal-600 text-white" value="teal">
                            Teal
                        </option>
                        <option
                            className="bg-violet-600 text-white"
                            value="violet">
                            Violet
                        </option>
                        <option
                            className="bg-yellow-600 text-white"
                            value="yellow">
                            Yellow
                        </option>
                        <option className="bg-zinc-600 text-white" value="zinc">
                            Zinc
                        </option>
                    </select>
                </div>

                <div className="mx-2">
                    <span className="w-full">Size</span>
                    <select
                        name="size"
                        id="size"
                        className="w-full"
                        value={size || ""}
                        onChange={(e) =>
                            setSize((e.currentTarget.value || null) as any)
                        }>
                        <option value="">Not set - use from theme</option>
                        <option value="xs">xs</option>
                        <option value="sm">sm</option>
                        <option value="md">md</option>
                        <option value="lg">lg</option>
                        <option value="xl">xl</option>
                    </select>
                </div>

                <div className="mx-2">
                    <div className="mb-1">
                        <label htmlFor="rtl">Filled</label>
                        <input
                            id="rtl"
                            type="radio"
                            onChange={(e) =>
                                e.currentTarget.checked && setVariant("filled")
                            }
                            checked={
                                variant === "filled" ||
                                (!variant &&
                                    button?.defaultProps?.variant === "filled")
                            }
                        />
                    </div>

                    <div className="mb-1">
                        <label htmlFor="rtl">Outlined</label>
                        <input
                            id="rtl"
                            type="radio"
                            onChange={(e) =>
                                e.currentTarget.checked &&
                                setVariant("outlined")
                            }
                            checked={
                                variant === "outlined" ||
                                (!variant &&
                                    button?.defaultProps?.variant ===
                                        "outlined")
                            }
                        />
                    </div>

                    <div className="mb-1">
                        <label htmlFor="rtl">Outlined Filled</label>
                        <input
                            id="rtl"
                            type="radio"
                            onChange={(e) =>
                                e.currentTarget.checked &&
                                setVariant("outlined_filled")
                            }
                            checked={
                                variant === "outlined_filled" ||
                                (!variant &&
                                    button?.defaultProps?.variant ===
                                        "outlined_filled")
                            }
                        />
                    </div>

                    <div className="mb-1">
                        <label htmlFor="rtl">Gradient</label>
                        <input
                            id="rtl"
                            type="radio"
                            onChange={(e) =>
                                e.currentTarget.checked &&
                                setVariant("gradient")
                            }
                            checked={
                                variant === "gradient" ||
                                (!variant &&
                                    button?.defaultProps?.variant ===
                                        "gradient")
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconButtonComponent;
