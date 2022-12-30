
#color and size 
colored <- function(x, color, size = "none", bold = F, ita = F) {
  if (bold == T){bold = "bold"}
  if (ita == T){ita = "italic"}
  if (knitr::is_latex_output()) {
    sprintf("\\textcolor{%s}{%s}", color, x)
  } else if (knitr::is_html_output()) {
    sprintf("<span style='color: %s; font-size: %s; font-weight: %s; font-style: %s'>%s</span>", color,size,bold, ita, x)
  } else x
  
}



#usage: `r colored("Hi", "red")`

#Insert arrows 
arr = function(x){
  if (stringr::str_starts(x, "r")){
    x = "&rarr;"
  }else if(stringr::str_starts(x, "l")){
    x = "&larr;"
  }else if(stringr::str_starts(x, "u")){
    x = "&uarr;"
  }else if(stringr::str_starts(x, "d")){
    x = "&darr;"}
  sprintf("<span>%s</span>", x)}

#Add sidenote 
side_note = function(text){
  sprintf("<div class='sidenote'>%s</div>", text)
}
