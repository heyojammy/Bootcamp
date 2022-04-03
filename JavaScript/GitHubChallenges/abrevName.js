
/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F*/

const abbreviateName = name => {
    let letters = name.split(' ').map(l => l.charAt(0)).join(".").toUpperCase();
    return letters;
}

abbreviateName("jaimmika bouverette"); //output J.B