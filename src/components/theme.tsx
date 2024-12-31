import { Input, useTheme } from "@erfanetoon/react-tailwind-ui";
import Highlight from "react-highlight";

const Theme = () => {
    const { global, handleChange } = useTheme();

    return (
        <div>
            <div className="mb-4">
                <Highlight className="direction-ltr rounded-2xl shadow">
                    {`
<ThemeProvider
    global={{
        color: "${global?.color}",
        direction: "${global?.direction}",
        borderRadius: "${global?.borderRadius}",
        transition: "${global?.transition}",
    }}>
</ThemeProvider>
                `}
                </Highlight>
            </div>

            <div className="flex items-center">
                <div className="mx-2">
                    <span className="block">Color</span>
                    <select
                        name="color"
                        id="color"
                        className="w-full"
                        value={global?.color}
                        onChange={(e) =>
                            handleChange({
                                global: {
                                    ...global,
                                    color: e.currentTarget.value as any,
                                },
                            })
                        }>
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
                        <label htmlFor="rtl">Right-to-Left</label>
                        <input
                            id="rtl"
                            type="radio"
                            onChange={(e) =>
                                handleChange({
                                    global: {
                                        ...global,
                                        direction: e.currentTarget.checked
                                            ? "rtl"
                                            : "ltr",
                                    },
                                })
                            }
                            checked={global?.direction === "rtl"}
                        />
                    </div>

                    <div>
                        <label htmlFor="ltr">Left-to-Right</label>
                        <input
                            id="ltr"
                            type="radio"
                            onChange={(e) =>
                                handleChange({
                                    global: {
                                        ...global,
                                        direction: e.currentTarget.checked
                                            ? "ltr"
                                            : "rtl",
                                    },
                                })
                            }
                            checked={global?.direction === "ltr"}
                        />
                    </div>
                </div>

                <div className="mx-2">
                    <Input
                        onChange={(e) =>
                            handleChange({
                                global: {
                                    ...global,
                                    borderRadius: e.target.value,
                                },
                            })
                        }
                        value={global?.borderRadius}
                    />
                </div>

                <div className="mx-2">
                    <Input
                        onChange={(e) =>
                            handleChange({
                                global: {
                                    ...global,
                                    transition: e.target.value,
                                },
                            })
                        }
                        value={global?.transition}
                    />
                </div>
            </div>
        </div>
    );
};

export default Theme;
