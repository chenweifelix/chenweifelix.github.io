---
title: Mean, SD, Standardization
author: Felix
date: ''
slug: []
categories: []
tags: []
---

# Load in packages 

```r
library(tidyverse)
```

```
## ── Attaching packages ─────────────────────────────────────── tidyverse 1.3.2 ──
## ✔ ggplot2 3.4.0      ✔ purrr   0.3.5 
## ✔ tibble  3.1.8      ✔ dplyr   1.0.10
## ✔ tidyr   1.2.1      ✔ stringr 1.4.1 
## ✔ readr   2.1.3      ✔ forcats 0.5.2 
## ── Conflicts ────────────────────────────────────────── tidyverse_conflicts() ──
## ✖ dplyr::filter() masks stats::filter()
## ✖ dplyr::lag()    masks stats::lag()
```

# Take a look at the data 


```r
str(mtcars)
```

```
## 'data.frame':	32 obs. of  11 variables:
##  $ mpg : num  21 21 22.8 21.4 18.7 18.1 14.3 24.4 22.8 19.2 ...
##  $ cyl : num  6 6 4 6 8 6 8 4 4 6 ...
##  $ disp: num  160 160 108 258 360 ...
##  $ hp  : num  110 110 93 110 175 105 245 62 95 123 ...
##  $ drat: num  3.9 3.9 3.85 3.08 3.15 2.76 3.21 3.69 3.92 3.92 ...
##  $ wt  : num  2.62 2.88 2.32 3.21 3.44 ...
##  $ qsec: num  16.5 17 18.6 19.4 17 ...
##  $ vs  : num  0 0 1 1 0 1 0 1 1 1 ...
##  $ am  : num  1 1 1 0 0 0 0 0 0 0 ...
##  $ gear: num  4 4 4 3 3 3 3 4 4 4 ...
##  $ carb: num  4 4 1 1 2 1 4 2 2 4 ...
```

# Calculating the mean of multiple columns   


```r
mtcars %>% head() %>% mutate(mean = rowMeans(select(.,vs,am))) 
```

```
##                    mpg cyl disp  hp drat    wt  qsec vs am gear carb mean
## Mazda RX4         21.0   6  160 110 3.90 2.620 16.46  0  1    4    4  0.5
## Mazda RX4 Wag     21.0   6  160 110 3.90 2.875 17.02  0  1    4    4  0.5
## Datsun 710        22.8   4  108  93 3.85 2.320 18.61  1  1    4    1  1.0
## Hornet 4 Drive    21.4   6  258 110 3.08 3.215 19.44  1  0    3    1  0.5
## Hornet Sportabout 18.7   8  360 175 3.15 3.440 17.02  0  0    3    2  0.0
## Valiant           18.1   6  225 105 2.76 3.460 20.22  1  0    3    1  0.5
```

Calculate the mean of the columns with "m." Useful when calculating the means of the questionnaire items that are named with the name of the questionnaire 

```r
mtcars %>% head() %>% mutate(mean = rowMeans(select(.,contains("m")))) 
```

```
##                    mpg cyl disp  hp drat    wt  qsec vs am gear carb  mean
## Mazda RX4         21.0   6  160 110 3.90 2.620 16.46  0  1    4    4 11.00
## Mazda RX4 Wag     21.0   6  160 110 3.90 2.875 17.02  0  1    4    4 11.00
## Datsun 710        22.8   4  108  93 3.85 2.320 18.61  1  1    4    1 11.90
## Hornet 4 Drive    21.4   6  258 110 3.08 3.215 19.44  1  0    3    1 10.70
## Hornet Sportabout 18.7   8  360 175 3.15 3.440 17.02  0  0    3    2  9.35
## Valiant           18.1   6  225 105 2.76 3.460 20.22  1  0    3    1  9.05
```

Similar to above 

```r
mtcars %>% head() %>% mutate(mean = rowMeans(select(.,starts_with("c"))))
```

```
##                    mpg cyl disp  hp drat    wt  qsec vs am gear carb mean
## Mazda RX4         21.0   6  160 110 3.90 2.620 16.46  0  1    4    4  5.0
## Mazda RX4 Wag     21.0   6  160 110 3.90 2.875 17.02  0  1    4    4  5.0
## Datsun 710        22.8   4  108  93 3.85 2.320 18.61  1  1    4    1  2.5
## Hornet 4 Drive    21.4   6  258 110 3.08 3.215 19.44  1  0    3    1  3.5
## Hornet Sportabout 18.7   8  360 175 3.15 3.440 17.02  0  0    3    2  5.0
## Valiant           18.1   6  225 105 2.76 3.460 20.22  1  0    3    1  3.5
```

# Calculate the standard deviations of multiple columns 
Because there is no functions as straightforward as `colMeans`, I use the basic R function `apply`. 


```r
mtcars %>% head() %>% mutate(sd = apply(X = select(., starts_with("c")), FUN = sd, MARGIN = 1))
```

```
##                    mpg cyl disp  hp drat    wt  qsec vs am gear carb       sd
## Mazda RX4         21.0   6  160 110 3.90 2.620 16.46  0  1    4    4 1.414214
## Mazda RX4 Wag     21.0   6  160 110 3.90 2.875 17.02  0  1    4    4 1.414214
## Datsun 710        22.8   4  108  93 3.85 2.320 18.61  1  1    4    1 2.121320
## Hornet 4 Drive    21.4   6  258 110 3.08 3.215 19.44  1  0    3    1 3.535534
## Hornet Sportabout 18.7   8  360 175 3.15 3.440 17.02  0  0    3    2 4.242641
## Valiant           18.1   6  225 105 2.76 3.460 20.22  1  0    3    1 3.535534
```

# Calculate the mean and sd of a variable in the sample 


```r
temp = mtcars %>% transmute(var1 = rowMeans(select(.,disp,hp)), 
                  var2 = rowMeans(select(.,drat,wt)))
temp %>% head()
```

```
##                    var1   var2
## Mazda RX4         135.0 3.2600
## Mazda RX4 Wag     135.0 3.3875
## Datsun 710        100.5 3.0850
## Hornet 4 Drive    184.0 3.1475
## Hornet Sportabout 267.5 3.2950
## Valiant           165.0 3.1100
```

```r
temp %>% summarize(mean_var1 = mean(var1), sd_var1 = sd(var1), 
                   mean_var2 = mean(var2), sd_var2 = sd(var2))
```

```
##   mean_var1  sd_var1 mean_var2   sd_var2
## 1  188.7047 91.52047  3.406906 0.3527814
```

```r
#Alternatively, if the vars are not already created
mtcars %>% 
  summarize(mean_var1 = mean(rowMeans(select(.,disp,hp))),
            sd_var1 = sd(rowMeans(select(.,disp,hp))),
            mean_var2 = mean(rowMeans(select(.,drat,wt))),
            sd_var2 = sd(rowMeans(select(.,drat,wt))),)
```

```
##   mean_var1  sd_var1 mean_var2   sd_var2
## 1  188.7047 91.52047  3.406906 0.3527814
```

# Standardize variable(s)


```r
#Standardize one variable 
temp %>% mutate(z_var1 = scale(var1, scale = T)) %>% head()
```

```
##                    var1   var2      z_var1
## Mazda RX4         135.0 3.2600 -0.58680521
## Mazda RX4 Wag     135.0 3.3875 -0.58680521
## Datsun 710        100.5 3.0850 -0.96377007
## Hornet 4 Drive    184.0 3.1475 -0.05140585
## Hornet Sportabout 267.5 3.2950  0.86095837
## Valiant           165.0 3.1100 -0.25900968
```

```r
#Standardize multiple variable 
temp %>% mutate(across(c(var1, var2), #select vars 
                       scale, scale = T, #apply function 
                       .names = "z_{.col}")) %>%  #name the vars (if default, old vars are replaced)
    mutate(across(everything(), round, 3)) %>% head()
```

```
##                    var1  var2 z_var1 z_var2
## Mazda RX4         135.0 3.260 -0.587 -0.416
## Mazda RX4 Wag     135.0 3.388 -0.587 -0.055
## Datsun 710        100.5 3.085 -0.964 -0.912
## Hornet 4 Drive    184.0 3.148 -0.051 -0.735
## Hornet Sportabout 267.5 3.295  0.861 -0.317
## Valiant           165.0 3.110 -0.259 -0.842
```


# Resources:

- Documentation of `across`: https://dplyr.tidyverse.org/reference/across.html


-----------------
_Disclaimer: These codes are not necessarily the best (e.g., fastest) solutions to the tasks, but simply the codes I use in my own work. I would deeply appreciate any suggestions to optimize them. Please feel free to reach out to me via email!_
