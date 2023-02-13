import { Button, Input, useTheme } from "@erfanetoon/react-tailwind-ui";
import { ButtonThemeProps } from "@erfanetoon/react-tailwind-ui/components/button/types";
import { Colors } from "@erfanetoon/react-tailwind-ui/types/global";
import { useState } from "react";
import Highlight from "react-highlight";

const ButtonComponent = () => {
    const { global, button } = useTheme();

    const [value, setValue] = useState("Button");
    const [color, setColor] = useState<Colors | null>(null);
    const [variant, setVariant] = useState<ButtonThemeProps["variant"] | null>(
        null,
    );
    const [size, setSize] = useState<ButtonThemeProps["size"] | null>(null);

    return (
        <div className="">
            <Highlight className="direction-ltr rounded-2xl shadow">
                {`
<Button 
      color="${color || global?.color}"
      size="${variant || button?.defaultProps?.variant}"
      variant="${size || button?.defaultProps?.size}"
>
  ${value}
</Button>
                `}
            </Highlight>

            <Button
                {...(color ? { color } : {})}
                {...(variant ? { variant } : {})}
                className="mt-8">
                {value}
            </Button>

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
                        <label htmlFor="rtl">Gradiend</label>
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

                <div className="mx-2">
                    <Input
                        label="Button text"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                </div>
            </div>
        </div>
    );
};

export default ButtonComponent;
