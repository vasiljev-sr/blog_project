type Mods = Record<string, boolean>
export const classNames = (cls: string, mods? : Mods, additional?: string[] ): string => {
    const positiveMods = Object.entries(mods).
                                    filter(([className, condition]) => Boolean(condition)).
                                    map(([className, condition]) => ( className ))

    return  [cls, ...additional, ...positiveMods].join(' ')

}