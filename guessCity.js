function guessCity(capital, coastal, famous, ancient) {
    if (capital && ancient && famous && !coastal)
        return "Jerusalem";
    if (!capital && !ancient && famous && !coastal)
        return "Tel Aviv";
    if (!capital && ancient && !famous && coastal)
        return "Acre";
    if (!capital && ancient && !famous && !coastal)
        return "katzrin";
    if (!capital && !ancient && !famous && coastal)
        return "Zikim";
    if (!capital && !ancient && !famous && !coastal)
        return "Musmus";    
    return undefined;

}