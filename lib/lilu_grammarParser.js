// Generated from lilu_grammar.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var lilu_grammarListener = require('./lilu_grammarListener').lilu_grammarListener;
var lilu_grammarVisitor = require('./lilu_grammarVisitor').lilu_grammarVisitor;

var grammarFileName = "lilu_grammar.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003G\u01bf\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0007\u0005K\n\u0005\f\u0005\u000e\u0005N\u000b\u0005",
    "\u0003\u0006\u0003\u0006\u0005\u0006R\n\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0007\u0006W\n\u0006\f\u0006\u000e\u0006Z\u000b\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007_\n\u0007\u0003\b\u0005\b",
    "b\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bh\n\b\f\b\u000e\bk\u000b",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0007\ts\n\t\f\t",
    "\u000e\tv\u000b\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t}\n",
    "\t\f\t\u000e\t\u0080\u000b\t\u0007\t\u0082\n\t\f\t\u000e\t\u0085\u000b",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u008b\n\n\f\n\u000e\n\u008e",
    "\u000b\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007",
    "\n\u0097\n\n\f\n\u000e\n\u009a\u000b\n\u0003\n\u0003\n\u0007\n\u009e",
    "\n\n\f\n\u000e\n\u00a1\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u00a8\n\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0005\u000b\u00ae\n\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0006\r\u00bb\n\r\r\r\u000e\r\u00bc\u0003\r\u0003\r\u0003",
    "\u000e\u0005\u000e\u00c2\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0005\u000f\u00c9\n\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007",
    "\u000f\u00d2\n\u000f\f\u000f\u000e\u000f\u00d5\u000b\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00dc\n",
    "\u000f\u0003\u0010\u0003\u0010\u0005\u0010\u00e0\n\u0010\u0003\u0010",
    "\u0005\u0010\u00e3\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u00e9\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00f1\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00f6\n\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u00fb\n\u0011\u0007\u0011\u00fd",
    "\n\u0011\f\u0011\u000e\u0011\u0100\u000b\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012",
    "\u0109\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u010e",
    "\n\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0005\u0014\u0115\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0005\u0014\u0122\n\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u0135\n\u0015\f\u0015",
    "\u000e\u0015\u0138\u000b\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u013c",
    "\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u0141\n\u0016",
    "\f\u0016\u000e\u0016\u0144\u000b\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0158\n\u0017",
    "\u0005\u0017\u015a\n\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0007",
    "\u0017\u0177\n\u0017\f\u0017\u000e\u0017\u017a\u000b\u0017\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0181\n",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0187",
    "\n\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u001a\u0005\u001a\u018f\n\u001a\u0003\u001a\u0003\u001a\u0005",
    "\u001a\u0193\n\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0005\u001b\u0199\n\u001b\u0003\u001b\u0003\u001b\u0006\u001b\u019d",
    "\n\u001b\r\u001b\u000e\u001b\u019e\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0003\u001c\u0005\u001c\u01a5\n\u001c\u0003\u001d\u0006\u001d\u01a8",
    "\n\u001d\r\u001d\u000e\u001d\u01a9\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0007\u001e\u01b1\n\u001e\f\u001e\u000e\u001e",
    "\u01b4\u000b\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u01b8\n\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0002\u0005\u0010\u0012, \u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<\u0002\f\u0004\u0002",
    "%&(*\u0007\u0002\t\t\u0012\u0012\u0015\u0015\u001d\u001dCC\u0004\u0002",
    "\u001e\u001e  \u0004\u0002&&((\u0004\u0002=>BB\u0003\u0002;<\u0003\u0002",
    "\u0004\u0005\u0003\u000258\u0003\u0002\u0018\u001a\u0004\u0002\u0006",
    "\u0007<<\u0002\u01e7\u0002>\u0003\u0002\u0002\u0002\u0004A\u0003\u0002",
    "\u0002\u0002\u0006C\u0003\u0002\u0002\u0002\bE\u0003\u0002\u0002\u0002",
    "\nQ\u0003\u0002\u0002\u0002\f[\u0003\u0002\u0002\u0002\u000ea\u0003",
    "\u0002\u0002\u0002\u0010n\u0003\u0002\u0002\u0002\u0012\u0086\u0003",
    "\u0002\u0002\u0002\u0014\u00a7\u0003\u0002\u0002\u0002\u0016\u00b2\u0003",
    "\u0002\u0002\u0002\u0018\u00b5\u0003\u0002\u0002\u0002\u001a\u00c1\u0003",
    "\u0002\u0002\u0002\u001c\u00db\u0003\u0002\u0002\u0002\u001e\u00f0\u0003",
    "\u0002\u0002\u0002 \u00f2\u0003\u0002\u0002\u0002\"\u0108\u0003\u0002",
    "\u0002\u0002$\u010a\u0003\u0002\u0002\u0002&\u0121\u0003\u0002\u0002",
    "\u0002(\u013b\u0003\u0002\u0002\u0002*\u013d\u0003\u0002\u0002\u0002",
    ",\u0159\u0003\u0002\u0002\u0002.\u0180\u0003\u0002\u0002\u00020\u018b",
    "\u0003\u0002\u0002\u00022\u018e\u0003\u0002\u0002\u00024\u0194\u0003",
    "\u0002\u0002\u00026\u01a4\u0003\u0002\u0002\u00028\u01a7\u0003\u0002",
    "\u0002\u0002:\u01b7\u0003\u0002\u0002\u0002<\u01bc\u0003\u0002\u0002",
    "\u0002>?\u0005\u001a\u000e\u0002?@\u00058\u001d\u0002@\u0003\u0003\u0002",
    "\u0002\u0002AB\t\u0002\u0002\u0002B\u0005\u0003\u0002\u0002\u0002CD",
    "\t\u0003\u0002\u0002D\u0007\u0003\u0002\u0002\u0002EL\u0007C\u0002\u0002",
    "FG\u0007/\u0002\u0002GH\u0005,\u0017\u0002HI\u00070\u0002\u0002IK\u0003",
    "\u0002\u0002\u0002JF\u0003\u0002\u0002\u0002KN\u0003\u0002\u0002\u0002",
    "LJ\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002M\t\u0003\u0002",
    "\u0002\u0002NL\u0003\u0002\u0002\u0002OP\t\u0004\u0002\u0002PR\u0007",
    "3\u0002\u0002QO\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RS",
    "\u0003\u0002\u0002\u0002SX\u0005\b\u0005\u0002TU\u00073\u0002\u0002",
    "UW\u0005\b\u0005\u0002VT\u0003\u0002\u0002\u0002WZ\u0003\u0002\u0002",
    "\u0002XV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y\u000b\u0003",
    "\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002[^\u0005\b\u0005\u0002\\",
    "]\u0007\u0003\u0002\u0002]_\u0005,\u0017\u0002^\\\u0003\u0002\u0002",
    "\u0002^_\u0003\u0002\u0002\u0002_\r\u0003\u0002\u0002\u0002`b\u0007",
    "\f\u0002\u0002a`\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002b",
    "c\u0003\u0002\u0002\u0002cd\u0005\u0006\u0004\u0002di\u0005\f\u0007",
    "\u0002ef\u00072\u0002\u0002fh\u0005\f\u0007\u0002ge\u0003\u0002\u0002",
    "\u0002hk\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002ij\u0003\u0002",
    "\u0002\u0002jl\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002lm\u0007",
    "1\u0002\u0002m\u000f\u0003\u0002\u0002\u0002no\b\t\u0001\u0002ot\u0005",
    "\u0006\u0004\u0002pq\u0007/\u0002\u0002qs\u00070\u0002\u0002rp\u0003",
    "\u0002\u0002\u0002sv\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002",
    "tu\u0003\u0002\u0002\u0002u\u0083\u0003\u0002\u0002\u0002vt\u0003\u0002",
    "\u0002\u0002wx\f\u0003\u0002\u0002xy\u00072\u0002\u0002y~\u0005\u0006",
    "\u0004\u0002z{\u0007/\u0002\u0002{}\u00070\u0002\u0002|z\u0003\u0002",
    "\u0002\u0002}\u0080\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002",
    "~\u007f\u0003\u0002\u0002\u0002\u007f\u0082\u0003\u0002\u0002\u0002",
    "\u0080~\u0003\u0002\u0002\u0002\u0081w\u0003\u0002\u0002\u0002\u0082",
    "\u0085\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0083",
    "\u0084\u0003\u0002\u0002\u0002\u0084\u0011\u0003\u0002\u0002\u0002\u0085",
    "\u0083\u0003\u0002\u0002\u0002\u0086\u0087\b\n\u0001\u0002\u0087\u008c",
    "\u0005\u0006\u0004\u0002\u0088\u0089\u0007/\u0002\u0002\u0089\u008b",
    "\u00070\u0002\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008b\u008e",
    "\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008c\u008d",
    "\u0003\u0002\u0002\u0002\u008d\u008f\u0003\u0002\u0002\u0002\u008e\u008c",
    "\u0003\u0002\u0002\u0002\u008f\u0090\u0007C\u0002\u0002\u0090\u009f",
    "\u0003\u0002\u0002\u0002\u0091\u0092\f\u0003\u0002\u0002\u0092\u0093",
    "\u00072\u0002\u0002\u0093\u0098\u0005\u0006\u0004\u0002\u0094\u0095",
    "\u0007/\u0002\u0002\u0095\u0097\u00070\u0002\u0002\u0096\u0094\u0003",
    "\u0002\u0002\u0002\u0097\u009a\u0003\u0002\u0002\u0002\u0098\u0096\u0003",
    "\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009b\u0003",
    "\u0002\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009b\u009c\u0007",
    "C\u0002\u0002\u009c\u009e\u0003\u0002\u0002\u0002\u009d\u0091\u0003",
    "\u0002\u0002\u0002\u009e\u00a1\u0003\u0002\u0002\u0002\u009f\u009d\u0003",
    "\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u0013\u0003",
    "\u0002\u0002\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a2\u00a3\u0007",
    "+\u0002\u0002\u00a3\u00a4\u0005\u0010\t\u0002\u00a4\u00a5\u0007,\u0002",
    "\u0002\u00a5\u00a6\u0007\u0003\u0002\u0002\u00a6\u00a8\u0003\u0002\u0002",
    "\u0002\u00a7\u00a2\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002",
    "\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00aa\u0007C\u0002",
    "\u0002\u00aa\u00ad\u0007+\u0002\u0002\u00ab\u00ae\u0005\u0010\t\u0002",
    "\u00ac\u00ae\u0005\u0012\n\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002",
    "\u00ad\u00ac\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002",
    "\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00b0\u0007,\u0002\u0002",
    "\u00b0\u00b1\u00071\u0002\u0002\u00b1\u0015\u0003\u0002\u0002\u0002",
    "\u00b2\u00b3\u0007C\u0002\u0002\u00b3\u00b4\u00071\u0002\u0002\u00b4",
    "\u0017\u0003\u0002\u0002\u0002\u00b5\u00b6\u0007\u000e\u0002\u0002\u00b6",
    "\u00ba\u0007-\u0002\u0002\u00b7\u00bb\u0005\u0014\u000b\u0002\u00b8",
    "\u00bb\u0005\u0016\f\u0002\u00b9\u00bb\u0005\u000e\b\u0002\u00ba\u00b7",
    "\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00ba\u00b9",
    "\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00ba",
    "\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00be",
    "\u0003\u0002\u0002\u0002\u00be\u00bf\u0007.\u0002\u0002\u00bf\u0019",
    "\u0003\u0002\u0002\u0002\u00c0\u00c2\u0005\u0018\r\u0002\u00c1\u00c0",
    "\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u001b",
    "\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007\u0014\u0002\u0002\u00c4\u00c5",
    "\u0005,\u0017\u0002\u00c5\u00c8\u0005*\u0016\u0002\u00c6\u00c7\u0007",
    "\u0011\u0002\u0002\u00c7\u00c9\u0005*\u0016\u0002\u00c8\u00c6\u0003",
    "\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00dc\u0003",
    "\u0002\u0002\u0002\u00ca\u00cb\u0007\u001f\u0002\u0002\u00cb\u00cc\u0005",
    "\n\u0006\u0002\u00cc\u00d3\u0007-\u0002\u0002\u00cd\u00ce\u0007\u000b",
    "\u0002\u0002\u00ce\u00cf\t\u0005\u0002\u0002\u00cf\u00d0\u00074\u0002",
    "\u0002\u00d0\u00d2\u0005*\u0016\u0002\u00d1\u00cd\u0003\u0002\u0002",
    "\u0002\u00d2\u00d5\u0003\u0002\u0002\u0002\u00d3\u00d1\u0003\u0002\u0002",
    "\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4\u00d6\u0003\u0002\u0002",
    "\u0002\u00d5\u00d3\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007\u000f\u0002",
    "\u0002\u00d7\u00d8\u00074\u0002\u0002\u00d8\u00d9\u0005*\u0016\u0002",
    "\u00d9\u00da\u0007.\u0002\u0002\u00da\u00dc\u0003\u0002\u0002\u0002",
    "\u00db\u00c3\u0003\u0002\u0002\u0002\u00db\u00ca\u0003\u0002\u0002\u0002",
    "\u00dc\u001d\u0003\u0002\u0002\u0002\u00dd\u00e2\u0007\u0013\u0002\u0002",
    "\u00de\u00e0\u0005\u0006\u0004\u0002\u00df\u00de\u0003\u0002\u0002\u0002",
    "\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002",
    "\u00e1\u00e3\u0005:\u001e\u0002\u00e2\u00df\u0003\u0002\u0002\u0002",
    "\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002",
    "\u00e4\u00e5\u00071\u0002\u0002\u00e5\u00e6\u0005,\u0017\u0002\u00e6",
    "\u00e8\u00071\u0002\u0002\u00e7\u00e9\u0005:\u001e\u0002\u00e8\u00e7",
    "\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002\u00e9\u00ea",
    "\u0003\u0002\u0002\u0002\u00ea\u00eb\u0005*\u0016\u0002\u00eb\u00f1",
    "\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007\"\u0002\u0002\u00ed\u00ee",
    "\u0005,\u0017\u0002\u00ee\u00ef\u0005*\u0016\u0002\u00ef\u00f1\u0003",
    "\u0002\u0002\u0002\u00f0\u00dd\u0003\u0002\u0002\u0002\u00f0\u00ec\u0003",
    "\u0002\u0002\u0002\u00f1\u001f\u0003\u0002\u0002\u0002\u00f2\u00f5\u0007",
    "/\u0002\u0002\u00f3\u00f6\u0005,\u0017\u0002\u00f4\u00f6\u0005 \u0011",
    "\u0002\u00f5\u00f3\u0003\u0002\u0002\u0002\u00f5\u00f4\u0003\u0002\u0002",
    "\u0002\u00f6\u00fe\u0003\u0002\u0002\u0002\u00f7\u00fa\u00072\u0002",
    "\u0002\u00f8\u00fb\u0005,\u0017\u0002\u00f9\u00fb\u0005 \u0011\u0002",
    "\u00fa\u00f8\u0003\u0002\u0002\u0002\u00fa\u00f9\u0003\u0002\u0002\u0002",
    "\u00fb\u00fd\u0003\u0002\u0002\u0002\u00fc\u00f7\u0003\u0002\u0002\u0002",
    "\u00fd\u0100\u0003\u0002\u0002\u0002\u00fe\u00fc\u0003\u0002\u0002\u0002",
    "\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff\u0101\u0003\u0002\u0002\u0002",
    "\u0100\u00fe\u0003\u0002\u0002\u0002\u0101\u0102\u00070\u0002\u0002",
    "\u0102!\u0003\u0002\u0002\u0002\u0103\u0109\u0005,\u0017\u0002\u0104",
    "\u0105\u0005,\u0017\u0002\u0105\u0106\u00072\u0002\u0002\u0106\u0107",
    "\u0005\"\u0012\u0002\u0107\u0109\u0003\u0002\u0002\u0002\u0108\u0103",
    "\u0003\u0002\u0002\u0002\u0108\u0104\u0003\u0002\u0002\u0002\u0109#",
    "\u0003\u0002\u0002\u0002\u010a\u010b\u0007C\u0002\u0002\u010b\u010d",
    "\u0007+\u0002\u0002\u010c\u010e\u0005\"\u0012\u0002\u010d\u010c\u0003",
    "\u0002\u0002\u0002\u010d\u010e\u0003\u0002\u0002\u0002\u010e\u010f\u0003",
    "\u0002\u0002\u0002\u010f\u0110\u0007,\u0002\u0002\u0110%\u0003\u0002",
    "\u0002\u0002\u0111\u0112\u0005\n\u0006\u0002\u0112\u0113\u00073\u0002",
    "\u0002\u0113\u0115\u0003\u0002\u0002\u0002\u0114\u0111\u0003\u0002\u0002",
    "\u0002\u0114\u0115\u0003\u0002\u0002\u0002\u0115\u0116\u0003\u0002\u0002",
    "\u0002\u0116\u0122\u0005$\u0013\u0002\u0117\u0118\u0007\u001b\u0002",
    "\u0002\u0118\u0119\u0007+\u0002\u0002\u0119\u011a\u0005\n\u0006\u0002",
    "\u011a\u011b\u0007,\u0002\u0002\u011b\u0122\u0003\u0002\u0002\u0002",
    "\u011c\u011d\u0007#\u0002\u0002\u011d\u011e\u0007+\u0002\u0002\u011e",
    "\u011f\u0005\n\u0006\u0002\u011f\u0120\u0007,\u0002\u0002\u0120\u0122",
    "\u0003\u0002\u0002\u0002\u0121\u0114\u0003\u0002\u0002\u0002\u0121\u0117",
    "\u0003\u0002\u0002\u0002\u0121\u011c\u0003\u0002\u0002\u0002\u0122\'",
    "\u0003\u0002\u0002\u0002\u0123\u0124\u0005:\u001e\u0002\u0124\u0125",
    "\u00071\u0002\u0002\u0125\u013c\u0003\u0002\u0002\u0002\u0126\u0127",
    "\u0005&\u0014\u0002\u0127\u0128\u00071\u0002\u0002\u0128\u013c\u0003",
    "\u0002\u0002\u0002\u0129\u013c\u0005\u001c\u000f\u0002\u012a\u013c\u0005",
    "\u001e\u0010\u0002\u012b\u012c\u0007\u001c\u0002\u0002\u012c\u013c\u0007",
    "1\u0002\u0002\u012d\u012e\u0007\n\u0002\u0002\u012e\u013c\u00071\u0002",
    "\u0002\u012f\u0130\u0007\r\u0002\u0002\u0130\u013c\u00071\u0002\u0002",
    "\u0131\u0136\u0007\u0010\u0002\u0002\u0132\u0133\u0007/\u0002\u0002",
    "\u0133\u0135\u00070\u0002\u0002\u0134\u0132\u0003\u0002\u0002\u0002",
    "\u0135\u0138\u0003\u0002\u0002\u0002\u0136\u0134\u0003\u0002\u0002\u0002",
    "\u0136\u0137\u0003\u0002\u0002\u0002\u0137\u0139\u0003\u0002\u0002\u0002",
    "\u0138\u0136\u0003\u0002\u0002\u0002\u0139\u013a\u0007C\u0002\u0002",
    "\u013a\u013c\u00071\u0002\u0002\u013b\u0123\u0003\u0002\u0002\u0002",
    "\u013b\u0126\u0003\u0002\u0002\u0002\u013b\u0129\u0003\u0002\u0002\u0002",
    "\u013b\u012a\u0003\u0002\u0002\u0002\u013b\u012b\u0003\u0002\u0002\u0002",
    "\u013b\u012d\u0003\u0002\u0002\u0002\u013b\u012f\u0003\u0002\u0002\u0002",
    "\u013b\u0131\u0003\u0002\u0002\u0002\u013c)\u0003\u0002\u0002\u0002",
    "\u013d\u0142\u0007-\u0002\u0002\u013e\u0141\u0005\u000e\b\u0002\u013f",
    "\u0141\u0005(\u0015\u0002\u0140\u013e\u0003\u0002\u0002\u0002\u0140",
    "\u013f\u0003\u0002\u0002\u0002\u0141\u0144\u0003\u0002\u0002\u0002\u0142",
    "\u0140\u0003\u0002\u0002\u0002\u0142\u0143\u0003\u0002\u0002\u0002\u0143",
    "\u0145\u0003\u0002\u0002\u0002\u0144\u0142\u0003\u0002\u0002\u0002\u0145",
    "\u0146\u0007.\u0002\u0002\u0146+\u0003\u0002\u0002\u0002\u0147\u0148",
    "\b\u0017\u0001\u0002\u0148\u0149\u0005<\u001f\u0002\u0149\u014a\u0005",
    ",\u0017\r\u014a\u015a\u0003\u0002\u0002\u0002\u014b\u014c\u0007+\u0002",
    "\u0002\u014c\u014d\u0005,\u0017\u0002\u014d\u014e\u0007,\u0002\u0002",
    "\u014e\u0158\u0003\u0002\u0002\u0002\u014f\u0158\u0007C\u0002\u0002",
    "\u0150\u0158\u0005\u0004\u0003\u0002\u0151\u0152\u0007\b\u0002\u0002",
    "\u0152\u0158\u0005$\u0013\u0002\u0153\u0158\u0005&\u0014\u0002\u0154",
    "\u0158\u0005\n\u0006\u0002\u0155\u0158\u0005 \u0011\u0002\u0156\u0158",
    "\u0007\u0016\u0002\u0002\u0157\u014b\u0003\u0002\u0002\u0002\u0157\u014f",
    "\u0003\u0002\u0002\u0002\u0157\u0150\u0003\u0002\u0002\u0002\u0157\u0151",
    "\u0003\u0002\u0002\u0002\u0157\u0153\u0003\u0002\u0002\u0002\u0157\u0154",
    "\u0003\u0002\u0002\u0002\u0157\u0155\u0003\u0002\u0002\u0002\u0157\u0156",
    "\u0003\u0002\u0002\u0002\u0158\u015a\u0003\u0002\u0002\u0002\u0159\u0147",
    "\u0003\u0002\u0002\u0002\u0159\u0157\u0003\u0002\u0002\u0002\u015a\u0178",
    "\u0003\u0002\u0002\u0002\u015b\u015c\f\f\u0002\u0002\u015c\u015d\t\u0006",
    "\u0002\u0002\u015d\u0177\u0005,\u0017\r\u015e\u015f\f\u000b\u0002\u0002",
    "\u015f\u0160\t\u0007\u0002\u0002\u0160\u0177\u0005,\u0017\f\u0161\u0162",
    "\f\n\u0002\u0002\u0162\u0163\t\b\u0002\u0002\u0163\u0177\u0005,\u0017",
    "\u000b\u0164\u0165\f\t\u0002\u0002\u0165\u0166\t\t\u0002\u0002\u0166",
    "\u0177\u0005,\u0017\n\u0167\u0168\f\b\u0002\u0002\u0168\u0169\u0007",
    "?\u0002\u0002\u0169\u0177\u0005,\u0017\t\u016a\u016b\f\u0007\u0002\u0002",
    "\u016b\u016c\u0007A\u0002\u0002\u016c\u0177\u0005,\u0017\b\u016d\u016e",
    "\f\u0006\u0002\u0002\u016e\u016f\u0007@\u0002\u0002\u016f\u0177\u0005",
    ",\u0017\u0007\u0170\u0171\f\u0005\u0002\u0002\u0171\u0172\u00079\u0002",
    "\u0002\u0172\u0177\u0005,\u0017\u0006\u0173\u0174\f\u0004\u0002\u0002",
    "\u0174\u0175\u0007:\u0002\u0002\u0175\u0177\u0005,\u0017\u0005\u0176",
    "\u015b\u0003\u0002\u0002\u0002\u0176\u015e\u0003\u0002\u0002\u0002\u0176",
    "\u0161\u0003\u0002\u0002\u0002\u0176\u0164\u0003\u0002\u0002\u0002\u0176",
    "\u0167\u0003\u0002\u0002\u0002\u0176\u016a\u0003\u0002\u0002\u0002\u0176",
    "\u016d\u0003\u0002\u0002\u0002\u0176\u0170\u0003\u0002\u0002\u0002\u0176",
    "\u0173\u0003\u0002\u0002\u0002\u0177\u017a\u0003\u0002\u0002\u0002\u0178",
    "\u0176\u0003\u0002\u0002\u0002\u0178\u0179\u0003\u0002\u0002\u0002\u0179",
    "-\u0003\u0002\u0002\u0002\u017a\u0178\u0003\u0002\u0002\u0002\u017b",
    "\u017c\u0007+\u0002\u0002\u017c\u017d\u0005\u0012\n\u0002\u017d\u017e",
    "\u0007,\u0002\u0002\u017e\u017f\u0007\u0003\u0002\u0002\u017f\u0181",
    "\u0003\u0002\u0002\u0002\u0180\u017b\u0003\u0002\u0002\u0002\u0180\u0181",
    "\u0003\u0002\u0002\u0002\u0181\u0182\u0003\u0002\u0002\u0002\u0182\u0183",
    "\u0007$\u0002\u0002\u0183\u0184\u0007C\u0002\u0002\u0184\u0186\u0007",
    "+\u0002\u0002\u0185\u0187\u0005\u0012\n\u0002\u0186\u0185\u0003\u0002",
    "\u0002\u0002\u0186\u0187\u0003\u0002\u0002\u0002\u0187\u0188\u0003\u0002",
    "\u0002\u0002\u0188\u0189\u0007,\u0002\u0002\u0189\u018a\u0005*\u0016",
    "\u0002\u018a/\u0003\u0002\u0002\u0002\u018b\u018c\t\n\u0002\u0002\u018c",
    "1\u0003\u0002\u0002\u0002\u018d\u018f\u00050\u0019\u0002\u018e\u018d",
    "\u0003\u0002\u0002\u0002\u018e\u018f\u0003\u0002\u0002\u0002\u018f\u0192",
    "\u0003\u0002\u0002\u0002\u0190\u0193\u0005\u000e\b\u0002\u0191\u0193",
    "\u0005.\u0018\u0002\u0192\u0190\u0003\u0002\u0002\u0002\u0192\u0191",
    "\u0003\u0002\u0002\u0002\u01933\u0003\u0002\u0002\u0002\u0194\u0195",
    "\u0007!\u0002\u0002\u0195\u0198\u0007C\u0002\u0002\u0196\u0197\u0007",
    "4\u0002\u0002\u0197\u0199\u0007C\u0002\u0002\u0198\u0196\u0003\u0002",
    "\u0002\u0002\u0198\u0199\u0003\u0002\u0002\u0002\u0199\u019a\u0003\u0002",
    "\u0002\u0002\u019a\u019c\u0007-\u0002\u0002\u019b\u019d\u00052\u001a",
    "\u0002\u019c\u019b\u0003\u0002\u0002\u0002\u019d\u019e\u0003\u0002\u0002",
    "\u0002\u019e\u019c\u0003\u0002\u0002\u0002\u019e\u019f\u0003\u0002\u0002",
    "\u0002\u019f\u01a0\u0003\u0002\u0002\u0002\u01a0\u01a1\u0007.\u0002",
    "\u0002\u01a15\u0003\u0002\u0002\u0002\u01a2\u01a5\u00054\u001b\u0002",
    "\u01a3\u01a5\u0005.\u0018\u0002\u01a4\u01a2\u0003\u0002\u0002\u0002",
    "\u01a4\u01a3\u0003\u0002\u0002\u0002\u01a57\u0003\u0002\u0002\u0002",
    "\u01a6\u01a8\u00056\u001c\u0002\u01a7\u01a6\u0003\u0002\u0002\u0002",
    "\u01a8\u01a9\u0003\u0002\u0002\u0002\u01a9\u01a7\u0003\u0002\u0002\u0002",
    "\u01a9\u01aa\u0003\u0002\u0002\u0002\u01aa9\u0003\u0002\u0002\u0002",
    "\u01ab\u01b8\u0005\n\u0006\u0002\u01ac\u01ad\u0007+\u0002\u0002\u01ad",
    "\u01b2\u0005\n\u0006\u0002\u01ae\u01af\u00072\u0002\u0002\u01af\u01b1",
    "\u0005\n\u0006\u0002\u01b0\u01ae\u0003\u0002\u0002\u0002\u01b1\u01b4",
    "\u0003\u0002\u0002\u0002\u01b2\u01b0\u0003\u0002\u0002\u0002\u01b2\u01b3",
    "\u0003\u0002\u0002\u0002\u01b3\u01b5\u0003\u0002\u0002\u0002\u01b4\u01b2",
    "\u0003\u0002\u0002\u0002\u01b5\u01b6\u0007,\u0002\u0002\u01b6\u01b8",
    "\u0003\u0002\u0002\u0002\u01b7\u01ab\u0003\u0002\u0002\u0002\u01b7\u01ac",
    "\u0003\u0002\u0002\u0002\u01b8\u01b9\u0003\u0002\u0002\u0002\u01b9\u01ba",
    "\u0007\u0003\u0002\u0002\u01ba\u01bb\u0005,\u0017\u0002\u01bb;\u0003",
    "\u0002\u0002\u0002\u01bc\u01bd\t\u000b\u0002\u0002\u01bd=\u0003\u0002",
    "\u0002\u00023LQX^ait~\u0083\u008c\u0098\u009f\u00a7\u00ad\u00ba\u00bc",
    "\u00c1\u00c8\u00d3\u00db\u00df\u00e2\u00e8\u00f0\u00f5\u00fa\u00fe\u0108",
    "\u010d\u0114\u0121\u0136\u013b\u0140\u0142\u0157\u0159\u0176\u0178\u0180",
    "\u0186\u018e\u0192\u0198\u019e\u01a4\u01a9\u01b2\u01b7"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "'>'", "'<'", "'!'", "'~'", "'allocate'", 
                     "'bool'", "'break'", "'case'", "'const'", "'continue'", 
                     "'declare'", "'default'", "'destruct'", "'else'", "'float'", 
                     "'for'", "'if'", "'int'", "'nil'", "'of'", "'private'", 
                     "'protected'", "'public'", "'read'", "'return'", "'string'", 
                     "'super'", "'switch'", "'this'", "'type'", "'while'", 
                     "'write'", "'function'", null, null, null, null, null, 
                     null, "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", 
                     "','", "'.'", "':'", "'=='", "'<='", "'>='", "'!='", 
                     "'&&'", "'||'", "'+'", "'-'", "'*'", "'/'", "'&'", 
                     "'|'", "'^'", "'%'" ];

var symbolicNames = [ null, "ASSIGN", "GT", "LT", "BANG", "TILDE", "ALLOCATE", 
                      "BOOL", "BREAK", "CASE", "CONST", "CONTINUE", "DECLARE", 
                      "DEFAULT", "DESTRUCT", "ELSE", "FLOAT", "FOR", "IF", 
                      "INT", "NIL", "OF", "PRIVATE", "PROTECTED", "PUBLIC", 
                      "READ", "RETURN", "STRING", "SUPER", "SWITCH", "THIS", 
                      "TYPE", "WHILE", "WRITE", "FUNCTION", "REAL_CONST", 
                      "HEX_CONST", "HEX_STR", "INT_CONST", "BOOL_CONST", 
                      "STRING_CONST", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                      "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", "COLON", 
                      "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "ADD", 
                      "SUB", "MUL", "DIV", "BITAND", "BITOR", "CARET", "MOD", 
                      "ID", "WHITESPACE", "NEWLINE", "BLOCKCOMMENT", "LINECOMMENT" ];

var ruleNames =  [ "program", "const_val", "type", "ref", "variable", "variable_val", 
                   "variable_def", "args", "args_variable", "func_dcl", 
                   "type_dcl", "ft_dcl", "dcl", "cond_stmt", "loop_stmt", 
                   "list", "params", "handle_call", "func_call", "stmt", 
                   "block", "expr", "fun_def", "access_modifier", "component", 
                   "type_def", "ft_def", "def", "assign", "unary_op" ];

function lilu_grammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

lilu_grammarParser.prototype = Object.create(antlr4.Parser.prototype);
lilu_grammarParser.prototype.constructor = lilu_grammarParser;

Object.defineProperty(lilu_grammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

lilu_grammarParser.EOF = antlr4.Token.EOF;
lilu_grammarParser.ASSIGN = 1;
lilu_grammarParser.GT = 2;
lilu_grammarParser.LT = 3;
lilu_grammarParser.BANG = 4;
lilu_grammarParser.TILDE = 5;
lilu_grammarParser.ALLOCATE = 6;
lilu_grammarParser.BOOL = 7;
lilu_grammarParser.BREAK = 8;
lilu_grammarParser.CASE = 9;
lilu_grammarParser.CONST = 10;
lilu_grammarParser.CONTINUE = 11;
lilu_grammarParser.DECLARE = 12;
lilu_grammarParser.DEFAULT = 13;
lilu_grammarParser.DESTRUCT = 14;
lilu_grammarParser.ELSE = 15;
lilu_grammarParser.FLOAT = 16;
lilu_grammarParser.FOR = 17;
lilu_grammarParser.IF = 18;
lilu_grammarParser.INT = 19;
lilu_grammarParser.NIL = 20;
lilu_grammarParser.OF = 21;
lilu_grammarParser.PRIVATE = 22;
lilu_grammarParser.PROTECTED = 23;
lilu_grammarParser.PUBLIC = 24;
lilu_grammarParser.READ = 25;
lilu_grammarParser.RETURN = 26;
lilu_grammarParser.STRING = 27;
lilu_grammarParser.SUPER = 28;
lilu_grammarParser.SWITCH = 29;
lilu_grammarParser.THIS = 30;
lilu_grammarParser.TYPE = 31;
lilu_grammarParser.WHILE = 32;
lilu_grammarParser.WRITE = 33;
lilu_grammarParser.FUNCTION = 34;
lilu_grammarParser.REAL_CONST = 35;
lilu_grammarParser.HEX_CONST = 36;
lilu_grammarParser.HEX_STR = 37;
lilu_grammarParser.INT_CONST = 38;
lilu_grammarParser.BOOL_CONST = 39;
lilu_grammarParser.STRING_CONST = 40;
lilu_grammarParser.LPAREN = 41;
lilu_grammarParser.RPAREN = 42;
lilu_grammarParser.LBRACE = 43;
lilu_grammarParser.RBRACE = 44;
lilu_grammarParser.LBRACK = 45;
lilu_grammarParser.RBRACK = 46;
lilu_grammarParser.SEMI = 47;
lilu_grammarParser.COMMA = 48;
lilu_grammarParser.DOT = 49;
lilu_grammarParser.COLON = 50;
lilu_grammarParser.EQUAL = 51;
lilu_grammarParser.LE = 52;
lilu_grammarParser.GE = 53;
lilu_grammarParser.NOTEQUAL = 54;
lilu_grammarParser.AND = 55;
lilu_grammarParser.OR = 56;
lilu_grammarParser.ADD = 57;
lilu_grammarParser.SUB = 58;
lilu_grammarParser.MUL = 59;
lilu_grammarParser.DIV = 60;
lilu_grammarParser.BITAND = 61;
lilu_grammarParser.BITOR = 62;
lilu_grammarParser.CARET = 63;
lilu_grammarParser.MOD = 64;
lilu_grammarParser.ID = 65;
lilu_grammarParser.WHITESPACE = 66;
lilu_grammarParser.NEWLINE = 67;
lilu_grammarParser.BLOCKCOMMENT = 68;
lilu_grammarParser.LINECOMMENT = 69;

lilu_grammarParser.RULE_program = 0;
lilu_grammarParser.RULE_const_val = 1;
lilu_grammarParser.RULE_type = 2;
lilu_grammarParser.RULE_ref = 3;
lilu_grammarParser.RULE_variable = 4;
lilu_grammarParser.RULE_variable_val = 5;
lilu_grammarParser.RULE_variable_def = 6;
lilu_grammarParser.RULE_args = 7;
lilu_grammarParser.RULE_args_variable = 8;
lilu_grammarParser.RULE_func_dcl = 9;
lilu_grammarParser.RULE_type_dcl = 10;
lilu_grammarParser.RULE_ft_dcl = 11;
lilu_grammarParser.RULE_dcl = 12;
lilu_grammarParser.RULE_cond_stmt = 13;
lilu_grammarParser.RULE_loop_stmt = 14;
lilu_grammarParser.RULE_list = 15;
lilu_grammarParser.RULE_params = 16;
lilu_grammarParser.RULE_handle_call = 17;
lilu_grammarParser.RULE_func_call = 18;
lilu_grammarParser.RULE_stmt = 19;
lilu_grammarParser.RULE_block = 20;
lilu_grammarParser.RULE_expr = 21;
lilu_grammarParser.RULE_fun_def = 22;
lilu_grammarParser.RULE_access_modifier = 23;
lilu_grammarParser.RULE_component = 24;
lilu_grammarParser.RULE_type_def = 25;
lilu_grammarParser.RULE_ft_def = 26;
lilu_grammarParser.RULE_def = 27;
lilu_grammarParser.RULE_assign = 28;
lilu_grammarParser.RULE_unary_op = 29;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.dcl = function() {
    return this.getTypedRuleContext(DclContext,0);
};

ProgramContext.prototype.def = function() {
    return this.getTypedRuleContext(DefContext,0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.ProgramContext = ProgramContext;

lilu_grammarParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, lilu_grammarParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.dcl();
        this.state = 61;
        this.def();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Const_valContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_const_val;
    return this;
}

Const_valContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Const_valContext.prototype.constructor = Const_valContext;

Const_valContext.prototype.INT_CONST = function() {
    return this.getToken(lilu_grammarParser.INT_CONST, 0);
};

Const_valContext.prototype.HEX_CONST = function() {
    return this.getToken(lilu_grammarParser.HEX_CONST, 0);
};

Const_valContext.prototype.REAL_CONST = function() {
    return this.getToken(lilu_grammarParser.REAL_CONST, 0);
};

Const_valContext.prototype.BOOL_CONST = function() {
    return this.getToken(lilu_grammarParser.BOOL_CONST, 0);
};

Const_valContext.prototype.STRING_CONST = function() {
    return this.getToken(lilu_grammarParser.STRING_CONST, 0);
};

Const_valContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterConst_val(this);
	}
};

Const_valContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitConst_val(this);
	}
};

Const_valContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitConst_val(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Const_valContext = Const_valContext;

lilu_grammarParser.prototype.const_val = function() {

    var localctx = new Const_valContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, lilu_grammarParser.RULE_const_val);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        _la = this._input.LA(1);
        if(!(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (lilu_grammarParser.REAL_CONST - 35)) | (1 << (lilu_grammarParser.HEX_CONST - 35)) | (1 << (lilu_grammarParser.INT_CONST - 35)) | (1 << (lilu_grammarParser.BOOL_CONST - 35)) | (1 << (lilu_grammarParser.STRING_CONST - 35)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.INT = function() {
    return this.getToken(lilu_grammarParser.INT, 0);
};

TypeContext.prototype.BOOL = function() {
    return this.getToken(lilu_grammarParser.BOOL, 0);
};

TypeContext.prototype.FLOAT = function() {
    return this.getToken(lilu_grammarParser.FLOAT, 0);
};

TypeContext.prototype.STRING = function() {
    return this.getToken(lilu_grammarParser.STRING, 0);
};

TypeContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitType(this);
	}
};

TypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.TypeContext = TypeContext;

lilu_grammarParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, lilu_grammarParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.BOOL) | (1 << lilu_grammarParser.FLOAT) | (1 << lilu_grammarParser.INT) | (1 << lilu_grammarParser.STRING))) !== 0) || _la===lilu_grammarParser.ID)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_ref;
    return this;
}

RefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RefContext.prototype.constructor = RefContext;

RefContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

RefContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LBRACK);
    } else {
        return this.getToken(lilu_grammarParser.LBRACK, i);
    }
};


RefContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

RefContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RBRACK);
    } else {
        return this.getToken(lilu_grammarParser.RBRACK, i);
    }
};


RefContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterRef(this);
	}
};

RefContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitRef(this);
	}
};

RefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.RefContext = RefContext;

lilu_grammarParser.prototype.ref = function() {

    var localctx = new RefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, lilu_grammarParser.RULE_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(lilu_grammarParser.ID);
        this.state = 74;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 68;
                this.match(lilu_grammarParser.LBRACK);
                this.state = 69;
                this.expr(0);
                this.state = 70;
                this.match(lilu_grammarParser.RBRACK); 
            }
            this.state = 76;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ref = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RefContext);
    } else {
        return this.getTypedRuleContext(RefContext,i);
    }
};

VariableContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.DOT);
    } else {
        return this.getToken(lilu_grammarParser.DOT, i);
    }
};


VariableContext.prototype.THIS = function() {
    return this.getToken(lilu_grammarParser.THIS, 0);
};

VariableContext.prototype.SUPER = function() {
    return this.getToken(lilu_grammarParser.SUPER, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.VariableContext = VariableContext;

lilu_grammarParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, lilu_grammarParser.RULE_variable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.SUPER || _la===lilu_grammarParser.THIS) {
            this.state = 77;
            _la = this._input.LA(1);
            if(!(_la===lilu_grammarParser.SUPER || _la===lilu_grammarParser.THIS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 78;
            this.match(lilu_grammarParser.DOT);
        }

        this.state = 81;
        this.ref();
        this.state = 86;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 82;
                this.match(lilu_grammarParser.DOT);
                this.state = 83;
                this.ref(); 
            }
            this.state = 88;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Variable_valContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_variable_val;
    return this;
}

Variable_valContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Variable_valContext.prototype.constructor = Variable_valContext;

Variable_valContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

Variable_valContext.prototype.ASSIGN = function() {
    return this.getToken(lilu_grammarParser.ASSIGN, 0);
};

Variable_valContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Variable_valContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterVariable_val(this);
	}
};

Variable_valContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitVariable_val(this);
	}
};

Variable_valContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitVariable_val(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Variable_valContext = Variable_valContext;

lilu_grammarParser.prototype.variable_val = function() {

    var localctx = new Variable_valContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, lilu_grammarParser.RULE_variable_val);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        this.ref();
        this.state = 92;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.ASSIGN) {
            this.state = 90;
            this.match(lilu_grammarParser.ASSIGN);
            this.state = 91;
            this.expr(0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Variable_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_variable_def;
    return this;
}

Variable_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Variable_defContext.prototype.constructor = Variable_defContext;

Variable_defContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Variable_defContext.prototype.variable_val = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Variable_valContext);
    } else {
        return this.getTypedRuleContext(Variable_valContext,i);
    }
};

Variable_defContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};

Variable_defContext.prototype.CONST = function() {
    return this.getToken(lilu_grammarParser.CONST, 0);
};

Variable_defContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.COMMA);
    } else {
        return this.getToken(lilu_grammarParser.COMMA, i);
    }
};


Variable_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterVariable_def(this);
	}
};

Variable_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitVariable_def(this);
	}
};

Variable_defContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitVariable_def(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Variable_defContext = Variable_defContext;

lilu_grammarParser.prototype.variable_def = function() {

    var localctx = new Variable_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, lilu_grammarParser.RULE_variable_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.CONST) {
            this.state = 94;
            this.match(lilu_grammarParser.CONST);
        }

        this.state = 97;
        this.type();
        this.state = 98;
        this.variable_val();
        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===lilu_grammarParser.COMMA) {
            this.state = 99;
            this.match(lilu_grammarParser.COMMA);
            this.state = 100;
            this.variable_val();
            this.state = 105;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 106;
        this.match(lilu_grammarParser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_args;
    return this;
}

ArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgsContext.prototype.constructor = ArgsContext;

ArgsContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ArgsContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LBRACK);
    } else {
        return this.getToken(lilu_grammarParser.LBRACK, i);
    }
};


ArgsContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RBRACK);
    } else {
        return this.getToken(lilu_grammarParser.RBRACK, i);
    }
};


ArgsContext.prototype.args = function() {
    return this.getTypedRuleContext(ArgsContext,0);
};

ArgsContext.prototype.COMMA = function() {
    return this.getToken(lilu_grammarParser.COMMA, 0);
};

ArgsContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterArgs(this);
	}
};

ArgsContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitArgs(this);
	}
};

ArgsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitArgs(this);
    } else {
        return visitor.visitChildren(this);
    }
};



lilu_grammarParser.prototype.args = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ArgsContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, lilu_grammarParser.RULE_args, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.type();
        this.state = 114;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 110;
                this.match(lilu_grammarParser.LBRACK);
                this.state = 111;
                this.match(lilu_grammarParser.RBRACK); 
            }
            this.state = 116;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

        this._ctx.stop = this._input.LT(-1);
        this.state = 129;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ArgsContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_args);
                this.state = 117;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 118;
                this.match(lilu_grammarParser.COMMA);
                this.state = 119;
                this.type();
                this.state = 124;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 120;
                        this.match(lilu_grammarParser.LBRACK);
                        this.state = 121;
                        this.match(lilu_grammarParser.RBRACK); 
                    }
                    this.state = 126;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
                }
         
            }
            this.state = 131;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Args_variableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_args_variable;
    return this;
}

Args_variableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Args_variableContext.prototype.constructor = Args_variableContext;

Args_variableContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Args_variableContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Args_variableContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LBRACK);
    } else {
        return this.getToken(lilu_grammarParser.LBRACK, i);
    }
};


Args_variableContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RBRACK);
    } else {
        return this.getToken(lilu_grammarParser.RBRACK, i);
    }
};


Args_variableContext.prototype.args_variable = function() {
    return this.getTypedRuleContext(Args_variableContext,0);
};

Args_variableContext.prototype.COMMA = function() {
    return this.getToken(lilu_grammarParser.COMMA, 0);
};

Args_variableContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterArgs_variable(this);
	}
};

Args_variableContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitArgs_variable(this);
	}
};

Args_variableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitArgs_variable(this);
    } else {
        return visitor.visitChildren(this);
    }
};



lilu_grammarParser.prototype.args_variable = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Args_variableContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, lilu_grammarParser.RULE_args_variable, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.type();
        this.state = 138;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===lilu_grammarParser.LBRACK) {
            this.state = 134;
            this.match(lilu_grammarParser.LBRACK);
            this.state = 135;
            this.match(lilu_grammarParser.RBRACK);
            this.state = 140;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 141;
        this.match(lilu_grammarParser.ID);
        this._ctx.stop = this._input.LT(-1);
        this.state = 157;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Args_variableContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_args_variable);
                this.state = 143;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 144;
                this.match(lilu_grammarParser.COMMA);
                this.state = 145;
                this.type();
                this.state = 150;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===lilu_grammarParser.LBRACK) {
                    this.state = 146;
                    this.match(lilu_grammarParser.LBRACK);
                    this.state = 147;
                    this.match(lilu_grammarParser.RBRACK);
                    this.state = 152;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 153;
                this.match(lilu_grammarParser.ID); 
            }
            this.state = 159;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Func_dclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_func_dcl;
    return this;
}

Func_dclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_dclContext.prototype.constructor = Func_dclContext;

Func_dclContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Func_dclContext.prototype.LPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LPAREN);
    } else {
        return this.getToken(lilu_grammarParser.LPAREN, i);
    }
};


Func_dclContext.prototype.RPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RPAREN);
    } else {
        return this.getToken(lilu_grammarParser.RPAREN, i);
    }
};


Func_dclContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};

Func_dclContext.prototype.args = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArgsContext);
    } else {
        return this.getTypedRuleContext(ArgsContext,i);
    }
};

Func_dclContext.prototype.ASSIGN = function() {
    return this.getToken(lilu_grammarParser.ASSIGN, 0);
};

Func_dclContext.prototype.args_variable = function() {
    return this.getTypedRuleContext(Args_variableContext,0);
};

Func_dclContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFunc_dcl(this);
	}
};

Func_dclContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFunc_dcl(this);
	}
};

Func_dclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitFunc_dcl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Func_dclContext = Func_dclContext;

lilu_grammarParser.prototype.func_dcl = function() {

    var localctx = new Func_dclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, lilu_grammarParser.RULE_func_dcl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.LPAREN) {
            this.state = 160;
            this.match(lilu_grammarParser.LPAREN);
            this.state = 161;
            this.args(0);
            this.state = 162;
            this.match(lilu_grammarParser.RPAREN);
            this.state = 163;
            this.match(lilu_grammarParser.ASSIGN);
        }

        this.state = 167;
        this.match(lilu_grammarParser.ID);
        this.state = 168;
        this.match(lilu_grammarParser.LPAREN);
        this.state = 171;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        if(la_===1) {
            this.state = 169;
            this.args(0);

        } else if(la_===2) {
            this.state = 170;
            this.args_variable(0);

        }
        this.state = 173;
        this.match(lilu_grammarParser.RPAREN);
        this.state = 174;
        this.match(lilu_grammarParser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Type_dclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_type_dcl;
    return this;
}

Type_dclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_dclContext.prototype.constructor = Type_dclContext;

Type_dclContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Type_dclContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};

Type_dclContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterType_dcl(this);
	}
};

Type_dclContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitType_dcl(this);
	}
};

Type_dclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitType_dcl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Type_dclContext = Type_dclContext;

lilu_grammarParser.prototype.type_dcl = function() {

    var localctx = new Type_dclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, lilu_grammarParser.RULE_type_dcl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.match(lilu_grammarParser.ID);
        this.state = 177;
        this.match(lilu_grammarParser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ft_dclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_ft_dcl;
    return this;
}

Ft_dclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ft_dclContext.prototype.constructor = Ft_dclContext;

Ft_dclContext.prototype.DECLARE = function() {
    return this.getToken(lilu_grammarParser.DECLARE, 0);
};

Ft_dclContext.prototype.LBRACE = function() {
    return this.getToken(lilu_grammarParser.LBRACE, 0);
};

Ft_dclContext.prototype.RBRACE = function() {
    return this.getToken(lilu_grammarParser.RBRACE, 0);
};

Ft_dclContext.prototype.func_dcl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Func_dclContext);
    } else {
        return this.getTypedRuleContext(Func_dclContext,i);
    }
};

Ft_dclContext.prototype.type_dcl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Type_dclContext);
    } else {
        return this.getTypedRuleContext(Type_dclContext,i);
    }
};

Ft_dclContext.prototype.variable_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Variable_defContext);
    } else {
        return this.getTypedRuleContext(Variable_defContext,i);
    }
};

Ft_dclContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFt_dcl(this);
	}
};

Ft_dclContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFt_dcl(this);
	}
};

Ft_dclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitFt_dcl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Ft_dclContext = Ft_dclContext;

lilu_grammarParser.prototype.ft_dcl = function() {

    var localctx = new Ft_dclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, lilu_grammarParser.RULE_ft_dcl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.match(lilu_grammarParser.DECLARE);
        this.state = 180;
        this.match(lilu_grammarParser.LBRACE);
        this.state = 184; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 184;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
            switch(la_) {
            case 1:
                this.state = 181;
                this.func_dcl();
                break;

            case 2:
                this.state = 182;
                this.type_dcl();
                break;

            case 3:
                this.state = 183;
                this.variable_def();
                break;

            }
            this.state = 186; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.BOOL) | (1 << lilu_grammarParser.CONST) | (1 << lilu_grammarParser.FLOAT) | (1 << lilu_grammarParser.INT) | (1 << lilu_grammarParser.STRING))) !== 0) || _la===lilu_grammarParser.LPAREN || _la===lilu_grammarParser.ID);
        this.state = 188;
        this.match(lilu_grammarParser.RBRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_dcl;
    return this;
}

DclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DclContext.prototype.constructor = DclContext;

DclContext.prototype.ft_dcl = function() {
    return this.getTypedRuleContext(Ft_dclContext,0);
};

DclContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterDcl(this);
	}
};

DclContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitDcl(this);
	}
};

DclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitDcl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.DclContext = DclContext;

lilu_grammarParser.prototype.dcl = function() {

    var localctx = new DclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, lilu_grammarParser.RULE_dcl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.DECLARE) {
            this.state = 190;
            this.ft_dcl();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Cond_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_cond_stmt;
    return this;
}

Cond_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Cond_stmtContext.prototype.constructor = Cond_stmtContext;

Cond_stmtContext.prototype.IF = function() {
    return this.getToken(lilu_grammarParser.IF, 0);
};

Cond_stmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Cond_stmtContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

Cond_stmtContext.prototype.ELSE = function() {
    return this.getToken(lilu_grammarParser.ELSE, 0);
};

Cond_stmtContext.prototype.SWITCH = function() {
    return this.getToken(lilu_grammarParser.SWITCH, 0);
};

Cond_stmtContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Cond_stmtContext.prototype.LBRACE = function() {
    return this.getToken(lilu_grammarParser.LBRACE, 0);
};

Cond_stmtContext.prototype.DEFAULT = function() {
    return this.getToken(lilu_grammarParser.DEFAULT, 0);
};

Cond_stmtContext.prototype.COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.COLON);
    } else {
        return this.getToken(lilu_grammarParser.COLON, i);
    }
};


Cond_stmtContext.prototype.RBRACE = function() {
    return this.getToken(lilu_grammarParser.RBRACE, 0);
};

Cond_stmtContext.prototype.CASE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.CASE);
    } else {
        return this.getToken(lilu_grammarParser.CASE, i);
    }
};


Cond_stmtContext.prototype.INT_CONST = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.INT_CONST);
    } else {
        return this.getToken(lilu_grammarParser.INT_CONST, i);
    }
};


Cond_stmtContext.prototype.HEX_CONST = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.HEX_CONST);
    } else {
        return this.getToken(lilu_grammarParser.HEX_CONST, i);
    }
};


Cond_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterCond_stmt(this);
	}
};

Cond_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitCond_stmt(this);
	}
};

Cond_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitCond_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Cond_stmtContext = Cond_stmtContext;

lilu_grammarParser.prototype.cond_stmt = function() {

    var localctx = new Cond_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, lilu_grammarParser.RULE_cond_stmt);
    var _la = 0; // Token type
    try {
        this.state = 217;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 193;
            this.match(lilu_grammarParser.IF);
            this.state = 194;
            this.expr(0);
            this.state = 195;
            this.block();
            this.state = 198;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===lilu_grammarParser.ELSE) {
                this.state = 196;
                this.match(lilu_grammarParser.ELSE);
                this.state = 197;
                this.block();
            }

            break;
        case lilu_grammarParser.SWITCH:
            this.enterOuterAlt(localctx, 2);
            this.state = 200;
            this.match(lilu_grammarParser.SWITCH);
            this.state = 201;
            this.variable();
            this.state = 202;
            this.match(lilu_grammarParser.LBRACE);
            this.state = 209;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===lilu_grammarParser.CASE) {
                this.state = 203;
                this.match(lilu_grammarParser.CASE);
                this.state = 204;
                _la = this._input.LA(1);
                if(!(_la===lilu_grammarParser.HEX_CONST || _la===lilu_grammarParser.INT_CONST)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 205;
                this.match(lilu_grammarParser.COLON);
                this.state = 206;
                this.block();
                this.state = 211;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 212;
            this.match(lilu_grammarParser.DEFAULT);
            this.state = 213;
            this.match(lilu_grammarParser.COLON);
            this.state = 214;
            this.block();
            this.state = 215;
            this.match(lilu_grammarParser.RBRACE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Loop_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_loop_stmt;
    return this;
}

Loop_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Loop_stmtContext.prototype.constructor = Loop_stmtContext;

Loop_stmtContext.prototype.FOR = function() {
    return this.getToken(lilu_grammarParser.FOR, 0);
};

Loop_stmtContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.SEMI);
    } else {
        return this.getToken(lilu_grammarParser.SEMI, i);
    }
};


Loop_stmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Loop_stmtContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

Loop_stmtContext.prototype.assign = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssignContext);
    } else {
        return this.getTypedRuleContext(AssignContext,i);
    }
};

Loop_stmtContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Loop_stmtContext.prototype.WHILE = function() {
    return this.getToken(lilu_grammarParser.WHILE, 0);
};

Loop_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterLoop_stmt(this);
	}
};

Loop_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitLoop_stmt(this);
	}
};

Loop_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitLoop_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Loop_stmtContext = Loop_stmtContext;

lilu_grammarParser.prototype.loop_stmt = function() {

    var localctx = new Loop_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, lilu_grammarParser.RULE_loop_stmt);
    var _la = 0; // Token type
    try {
        this.state = 238;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.FOR:
            this.enterOuterAlt(localctx, 1);
            this.state = 219;
            this.match(lilu_grammarParser.FOR);
            this.state = 224;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.BOOL) | (1 << lilu_grammarParser.FLOAT) | (1 << lilu_grammarParser.INT) | (1 << lilu_grammarParser.STRING) | (1 << lilu_grammarParser.SUPER) | (1 << lilu_grammarParser.THIS))) !== 0) || _la===lilu_grammarParser.LPAREN || _la===lilu_grammarParser.ID) {
                this.state = 221;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
                if(la_===1) {
                    this.state = 220;
                    this.type();

                }
                this.state = 223;
                this.assign();
            }

            this.state = 226;
            this.match(lilu_grammarParser.SEMI);
            this.state = 227;
            this.expr(0);
            this.state = 228;
            this.match(lilu_grammarParser.SEMI);
            this.state = 230;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===lilu_grammarParser.SUPER || _la===lilu_grammarParser.THIS || _la===lilu_grammarParser.LPAREN || _la===lilu_grammarParser.ID) {
                this.state = 229;
                this.assign();
            }

            this.state = 232;
            this.block();
            break;
        case lilu_grammarParser.WHILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 234;
            this.match(lilu_grammarParser.WHILE);
            this.state = 235;
            this.expr(0);
            this.state = 236;
            this.block();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.LBRACK = function() {
    return this.getToken(lilu_grammarParser.LBRACK, 0);
};

ListContext.prototype.RBRACK = function() {
    return this.getToken(lilu_grammarParser.RBRACK, 0);
};

ListContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ListContext.prototype.list = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ListContext);
    } else {
        return this.getTypedRuleContext(ListContext,i);
    }
};

ListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.COMMA);
    } else {
        return this.getToken(lilu_grammarParser.COMMA, i);
    }
};


ListContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterList(this);
	}
};

ListContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitList(this);
	}
};

ListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.ListContext = ListContext;

lilu_grammarParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, lilu_grammarParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.match(lilu_grammarParser.LBRACK);
        this.state = 243;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.state = 241;
            this.expr(0);
            break;

        case 2:
            this.state = 242;
            this.list();
            break;

        }
        this.state = 252;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===lilu_grammarParser.COMMA) {
            this.state = 245;
            this.match(lilu_grammarParser.COMMA);
            this.state = 248;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
            switch(la_) {
            case 1:
                this.state = 246;
                this.expr(0);
                break;

            case 2:
                this.state = 247;
                this.list();
                break;

            }
            this.state = 254;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 255;
        this.match(lilu_grammarParser.RBRACK);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_params;
    return this;
}

ParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamsContext.prototype.constructor = ParamsContext;

ParamsContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ParamsContext.prototype.COMMA = function() {
    return this.getToken(lilu_grammarParser.COMMA, 0);
};

ParamsContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

ParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterParams(this);
	}
};

ParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitParams(this);
	}
};

ParamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitParams(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.ParamsContext = ParamsContext;

lilu_grammarParser.prototype.params = function() {

    var localctx = new ParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, lilu_grammarParser.RULE_params);
    try {
        this.state = 262;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 257;
            this.expr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 258;
            this.expr(0);
            this.state = 259;
            this.match(lilu_grammarParser.COMMA);
            this.state = 260;
            this.params();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Handle_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_handle_call;
    return this;
}

Handle_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Handle_callContext.prototype.constructor = Handle_callContext;

Handle_callContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Handle_callContext.prototype.LPAREN = function() {
    return this.getToken(lilu_grammarParser.LPAREN, 0);
};

Handle_callContext.prototype.RPAREN = function() {
    return this.getToken(lilu_grammarParser.RPAREN, 0);
};

Handle_callContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

Handle_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterHandle_call(this);
	}
};

Handle_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitHandle_call(this);
	}
};

Handle_callContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitHandle_call(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Handle_callContext = Handle_callContext;

lilu_grammarParser.prototype.handle_call = function() {

    var localctx = new Handle_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, lilu_grammarParser.RULE_handle_call);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        this.match(lilu_grammarParser.ID);
        this.state = 265;
        this.match(lilu_grammarParser.LPAREN);
        this.state = 267;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (lilu_grammarParser.BANG - 4)) | (1 << (lilu_grammarParser.TILDE - 4)) | (1 << (lilu_grammarParser.ALLOCATE - 4)) | (1 << (lilu_grammarParser.NIL - 4)) | (1 << (lilu_grammarParser.READ - 4)) | (1 << (lilu_grammarParser.SUPER - 4)) | (1 << (lilu_grammarParser.THIS - 4)) | (1 << (lilu_grammarParser.WRITE - 4)) | (1 << (lilu_grammarParser.REAL_CONST - 4)))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (lilu_grammarParser.HEX_CONST - 36)) | (1 << (lilu_grammarParser.INT_CONST - 36)) | (1 << (lilu_grammarParser.BOOL_CONST - 36)) | (1 << (lilu_grammarParser.STRING_CONST - 36)) | (1 << (lilu_grammarParser.LPAREN - 36)) | (1 << (lilu_grammarParser.LBRACK - 36)) | (1 << (lilu_grammarParser.SUB - 36)) | (1 << (lilu_grammarParser.ID - 36)))) !== 0)) {
            this.state = 266;
            this.params();
        }

        this.state = 269;
        this.match(lilu_grammarParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Func_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_func_call;
    return this;
}

Func_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_callContext.prototype.constructor = Func_callContext;

Func_callContext.prototype.handle_call = function() {
    return this.getTypedRuleContext(Handle_callContext,0);
};

Func_callContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Func_callContext.prototype.DOT = function() {
    return this.getToken(lilu_grammarParser.DOT, 0);
};

Func_callContext.prototype.READ = function() {
    return this.getToken(lilu_grammarParser.READ, 0);
};

Func_callContext.prototype.LPAREN = function() {
    return this.getToken(lilu_grammarParser.LPAREN, 0);
};

Func_callContext.prototype.RPAREN = function() {
    return this.getToken(lilu_grammarParser.RPAREN, 0);
};

Func_callContext.prototype.WRITE = function() {
    return this.getToken(lilu_grammarParser.WRITE, 0);
};

Func_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFunc_call(this);
	}
};

Func_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFunc_call(this);
	}
};

Func_callContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitFunc_call(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Func_callContext = Func_callContext;

lilu_grammarParser.prototype.func_call = function() {

    var localctx = new Func_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, lilu_grammarParser.RULE_func_call);
    try {
        this.state = 287;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.SUPER:
        case lilu_grammarParser.THIS:
        case lilu_grammarParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 274;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
            if(la_===1) {
                this.state = 271;
                this.variable();
                this.state = 272;
                this.match(lilu_grammarParser.DOT);

            }
            this.state = 276;
            this.handle_call();
            break;
        case lilu_grammarParser.READ:
            this.enterOuterAlt(localctx, 2);
            this.state = 277;
            this.match(lilu_grammarParser.READ);
            this.state = 278;
            this.match(lilu_grammarParser.LPAREN);
            this.state = 279;
            this.variable();
            this.state = 280;
            this.match(lilu_grammarParser.RPAREN);
            break;
        case lilu_grammarParser.WRITE:
            this.enterOuterAlt(localctx, 3);
            this.state = 282;
            this.match(lilu_grammarParser.WRITE);
            this.state = 283;
            this.match(lilu_grammarParser.LPAREN);
            this.state = 284;
            this.variable();
            this.state = 285;
            this.match(lilu_grammarParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.assign = function() {
    return this.getTypedRuleContext(AssignContext,0);
};

StmtContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};

StmtContext.prototype.func_call = function() {
    return this.getTypedRuleContext(Func_callContext,0);
};

StmtContext.prototype.cond_stmt = function() {
    return this.getTypedRuleContext(Cond_stmtContext,0);
};

StmtContext.prototype.loop_stmt = function() {
    return this.getTypedRuleContext(Loop_stmtContext,0);
};

StmtContext.prototype.RETURN = function() {
    return this.getToken(lilu_grammarParser.RETURN, 0);
};

StmtContext.prototype.BREAK = function() {
    return this.getToken(lilu_grammarParser.BREAK, 0);
};

StmtContext.prototype.CONTINUE = function() {
    return this.getToken(lilu_grammarParser.CONTINUE, 0);
};

StmtContext.prototype.DESTRUCT = function() {
    return this.getToken(lilu_grammarParser.DESTRUCT, 0);
};

StmtContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

StmtContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LBRACK);
    } else {
        return this.getToken(lilu_grammarParser.LBRACK, i);
    }
};


StmtContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RBRACK);
    } else {
        return this.getToken(lilu_grammarParser.RBRACK, i);
    }
};


StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmt(this);
	}
};

StmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.StmtContext = StmtContext;

lilu_grammarParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, lilu_grammarParser.RULE_stmt);
    var _la = 0; // Token type
    try {
        this.state = 313;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 289;
            this.assign();
            this.state = 290;
            this.match(lilu_grammarParser.SEMI);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 292;
            this.func_call();
            this.state = 293;
            this.match(lilu_grammarParser.SEMI);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 295;
            this.cond_stmt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 296;
            this.loop_stmt();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 297;
            this.match(lilu_grammarParser.RETURN);
            this.state = 298;
            this.match(lilu_grammarParser.SEMI);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 299;
            this.match(lilu_grammarParser.BREAK);
            this.state = 300;
            this.match(lilu_grammarParser.SEMI);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 301;
            this.match(lilu_grammarParser.CONTINUE);
            this.state = 302;
            this.match(lilu_grammarParser.SEMI);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 303;
            this.match(lilu_grammarParser.DESTRUCT);
            this.state = 308;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===lilu_grammarParser.LBRACK) {
                this.state = 304;
                this.match(lilu_grammarParser.LBRACK);
                this.state = 305;
                this.match(lilu_grammarParser.RBRACK);
                this.state = 310;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 311;
            this.match(lilu_grammarParser.ID);
            this.state = 312;
            this.match(lilu_grammarParser.SEMI);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.LBRACE = function() {
    return this.getToken(lilu_grammarParser.LBRACE, 0);
};

BlockContext.prototype.RBRACE = function() {
    return this.getToken(lilu_grammarParser.RBRACE, 0);
};

BlockContext.prototype.variable_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Variable_defContext);
    } else {
        return this.getTypedRuleContext(Variable_defContext,i);
    }
};

BlockContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.BlockContext = BlockContext;

lilu_grammarParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, lilu_grammarParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 315;
        this.match(lilu_grammarParser.LBRACE);
        this.state = 320;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (lilu_grammarParser.BOOL - 7)) | (1 << (lilu_grammarParser.BREAK - 7)) | (1 << (lilu_grammarParser.CONST - 7)) | (1 << (lilu_grammarParser.CONTINUE - 7)) | (1 << (lilu_grammarParser.DESTRUCT - 7)) | (1 << (lilu_grammarParser.FLOAT - 7)) | (1 << (lilu_grammarParser.FOR - 7)) | (1 << (lilu_grammarParser.IF - 7)) | (1 << (lilu_grammarParser.INT - 7)) | (1 << (lilu_grammarParser.READ - 7)) | (1 << (lilu_grammarParser.RETURN - 7)) | (1 << (lilu_grammarParser.STRING - 7)) | (1 << (lilu_grammarParser.SUPER - 7)) | (1 << (lilu_grammarParser.SWITCH - 7)) | (1 << (lilu_grammarParser.THIS - 7)) | (1 << (lilu_grammarParser.WHILE - 7)) | (1 << (lilu_grammarParser.WRITE - 7)))) !== 0) || _la===lilu_grammarParser.LPAREN || _la===lilu_grammarParser.ID) {
            this.state = 318;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
            switch(la_) {
            case 1:
                this.state = 316;
                this.variable_def();
                break;

            case 2:
                this.state = 317;
                this.stmt();
                break;

            }
            this.state = 322;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 323;
        this.match(lilu_grammarParser.RBRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.unary_op = function() {
    return this.getTypedRuleContext(Unary_opContext,0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.LPAREN = function() {
    return this.getToken(lilu_grammarParser.LPAREN, 0);
};

ExprContext.prototype.RPAREN = function() {
    return this.getToken(lilu_grammarParser.RPAREN, 0);
};

ExprContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

ExprContext.prototype.const_val = function() {
    return this.getTypedRuleContext(Const_valContext,0);
};

ExprContext.prototype.ALLOCATE = function() {
    return this.getToken(lilu_grammarParser.ALLOCATE, 0);
};

ExprContext.prototype.handle_call = function() {
    return this.getTypedRuleContext(Handle_callContext,0);
};

ExprContext.prototype.func_call = function() {
    return this.getTypedRuleContext(Func_callContext,0);
};

ExprContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

ExprContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

ExprContext.prototype.NIL = function() {
    return this.getToken(lilu_grammarParser.NIL, 0);
};

ExprContext.prototype.MUL = function() {
    return this.getToken(lilu_grammarParser.MUL, 0);
};

ExprContext.prototype.DIV = function() {
    return this.getToken(lilu_grammarParser.DIV, 0);
};

ExprContext.prototype.MOD = function() {
    return this.getToken(lilu_grammarParser.MOD, 0);
};

ExprContext.prototype.ADD = function() {
    return this.getToken(lilu_grammarParser.ADD, 0);
};

ExprContext.prototype.SUB = function() {
    return this.getToken(lilu_grammarParser.SUB, 0);
};

ExprContext.prototype.LT = function() {
    return this.getToken(lilu_grammarParser.LT, 0);
};

ExprContext.prototype.GT = function() {
    return this.getToken(lilu_grammarParser.GT, 0);
};

ExprContext.prototype.EQUAL = function() {
    return this.getToken(lilu_grammarParser.EQUAL, 0);
};

ExprContext.prototype.NOTEQUAL = function() {
    return this.getToken(lilu_grammarParser.NOTEQUAL, 0);
};

ExprContext.prototype.LE = function() {
    return this.getToken(lilu_grammarParser.LE, 0);
};

ExprContext.prototype.GE = function() {
    return this.getToken(lilu_grammarParser.GE, 0);
};

ExprContext.prototype.BITAND = function() {
    return this.getToken(lilu_grammarParser.BITAND, 0);
};

ExprContext.prototype.CARET = function() {
    return this.getToken(lilu_grammarParser.CARET, 0);
};

ExprContext.prototype.BITOR = function() {
    return this.getToken(lilu_grammarParser.BITOR, 0);
};

ExprContext.prototype.AND = function() {
    return this.getToken(lilu_grammarParser.AND, 0);
};

ExprContext.prototype.OR = function() {
    return this.getToken(lilu_grammarParser.OR, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



lilu_grammarParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 42;
    this.enterRecursionRule(localctx, 42, lilu_grammarParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.BANG:
        case lilu_grammarParser.TILDE:
        case lilu_grammarParser.SUB:
            this.state = 326;
            this.unary_op();
            this.state = 327;
            this.expr(11);
            break;
        case lilu_grammarParser.ALLOCATE:
        case lilu_grammarParser.NIL:
        case lilu_grammarParser.READ:
        case lilu_grammarParser.SUPER:
        case lilu_grammarParser.THIS:
        case lilu_grammarParser.WRITE:
        case lilu_grammarParser.REAL_CONST:
        case lilu_grammarParser.HEX_CONST:
        case lilu_grammarParser.INT_CONST:
        case lilu_grammarParser.BOOL_CONST:
        case lilu_grammarParser.STRING_CONST:
        case lilu_grammarParser.LPAREN:
        case lilu_grammarParser.LBRACK:
        case lilu_grammarParser.ID:
            this.state = 341;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
            switch(la_) {
            case 1:
                this.state = 329;
                this.match(lilu_grammarParser.LPAREN);
                this.state = 330;
                this.expr(0);
                this.state = 331;
                this.match(lilu_grammarParser.RPAREN);
                break;

            case 2:
                this.state = 333;
                this.match(lilu_grammarParser.ID);
                break;

            case 3:
                this.state = 334;
                this.const_val();
                break;

            case 4:
                this.state = 335;
                this.match(lilu_grammarParser.ALLOCATE);
                this.state = 336;
                this.handle_call();
                break;

            case 5:
                this.state = 337;
                this.func_call();
                break;

            case 6:
                this.state = 338;
                this.variable();
                break;

            case 7:
                this.state = 339;
                this.list();
                break;

            case 8:
                this.state = 340;
                this.match(lilu_grammarParser.NIL);
                break;

            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 374;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 372;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 345;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 346;
                    _la = this._input.LA(1);
                    if(!(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (lilu_grammarParser.MUL - 59)) | (1 << (lilu_grammarParser.DIV - 59)) | (1 << (lilu_grammarParser.MOD - 59)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 347;
                    this.expr(11);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 348;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 349;
                    _la = this._input.LA(1);
                    if(!(_la===lilu_grammarParser.ADD || _la===lilu_grammarParser.SUB)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 350;
                    this.expr(10);
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 351;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 352;
                    _la = this._input.LA(1);
                    if(!(_la===lilu_grammarParser.GT || _la===lilu_grammarParser.LT)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 353;
                    this.expr(9);
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 354;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 355;
                    _la = this._input.LA(1);
                    if(!(((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (lilu_grammarParser.EQUAL - 51)) | (1 << (lilu_grammarParser.LE - 51)) | (1 << (lilu_grammarParser.GE - 51)) | (1 << (lilu_grammarParser.NOTEQUAL - 51)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 356;
                    this.expr(8);
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 357;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 358;
                    this.match(lilu_grammarParser.BITAND);
                    this.state = 359;
                    this.expr(7);
                    break;

                case 6:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 360;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 361;
                    this.match(lilu_grammarParser.CARET);
                    this.state = 362;
                    this.expr(6);
                    break;

                case 7:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 363;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 364;
                    this.match(lilu_grammarParser.BITOR);
                    this.state = 365;
                    this.expr(5);
                    break;

                case 8:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 366;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 367;
                    this.match(lilu_grammarParser.AND);
                    this.state = 368;
                    this.expr(4);
                    break;

                case 9:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 369;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 370;
                    this.match(lilu_grammarParser.OR);
                    this.state = 371;
                    this.expr(3);
                    break;

                } 
            }
            this.state = 376;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Fun_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_fun_def;
    return this;
}

Fun_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Fun_defContext.prototype.constructor = Fun_defContext;

Fun_defContext.prototype.FUNCTION = function() {
    return this.getToken(lilu_grammarParser.FUNCTION, 0);
};

Fun_defContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Fun_defContext.prototype.LPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LPAREN);
    } else {
        return this.getToken(lilu_grammarParser.LPAREN, i);
    }
};


Fun_defContext.prototype.RPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RPAREN);
    } else {
        return this.getToken(lilu_grammarParser.RPAREN, i);
    }
};


Fun_defContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

Fun_defContext.prototype.args_variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Args_variableContext);
    } else {
        return this.getTypedRuleContext(Args_variableContext,i);
    }
};

Fun_defContext.prototype.ASSIGN = function() {
    return this.getToken(lilu_grammarParser.ASSIGN, 0);
};

Fun_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFun_def(this);
	}
};

Fun_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFun_def(this);
	}
};

Fun_defContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitFun_def(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Fun_defContext = Fun_defContext;

lilu_grammarParser.prototype.fun_def = function() {

    var localctx = new Fun_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, lilu_grammarParser.RULE_fun_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 382;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.LPAREN) {
            this.state = 377;
            this.match(lilu_grammarParser.LPAREN);
            this.state = 378;
            this.args_variable(0);
            this.state = 379;
            this.match(lilu_grammarParser.RPAREN);
            this.state = 380;
            this.match(lilu_grammarParser.ASSIGN);
        }

        this.state = 384;
        this.match(lilu_grammarParser.FUNCTION);
        this.state = 385;
        this.match(lilu_grammarParser.ID);
        this.state = 386;
        this.match(lilu_grammarParser.LPAREN);
        this.state = 388;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.BOOL) | (1 << lilu_grammarParser.FLOAT) | (1 << lilu_grammarParser.INT) | (1 << lilu_grammarParser.STRING))) !== 0) || _la===lilu_grammarParser.ID) {
            this.state = 387;
            this.args_variable(0);
        }

        this.state = 390;
        this.match(lilu_grammarParser.RPAREN);
        this.state = 391;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Access_modifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_access_modifier;
    return this;
}

Access_modifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Access_modifierContext.prototype.constructor = Access_modifierContext;

Access_modifierContext.prototype.PRIVATE = function() {
    return this.getToken(lilu_grammarParser.PRIVATE, 0);
};

Access_modifierContext.prototype.PUBLIC = function() {
    return this.getToken(lilu_grammarParser.PUBLIC, 0);
};

Access_modifierContext.prototype.PROTECTED = function() {
    return this.getToken(lilu_grammarParser.PROTECTED, 0);
};

Access_modifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterAccess_modifier(this);
	}
};

Access_modifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitAccess_modifier(this);
	}
};

Access_modifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitAccess_modifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Access_modifierContext = Access_modifierContext;

lilu_grammarParser.prototype.access_modifier = function() {

    var localctx = new Access_modifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, lilu_grammarParser.RULE_access_modifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 393;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.PRIVATE) | (1 << lilu_grammarParser.PROTECTED) | (1 << lilu_grammarParser.PUBLIC))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ComponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_component;
    return this;
}

ComponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComponentContext.prototype.constructor = ComponentContext;

ComponentContext.prototype.variable_def = function() {
    return this.getTypedRuleContext(Variable_defContext,0);
};

ComponentContext.prototype.fun_def = function() {
    return this.getTypedRuleContext(Fun_defContext,0);
};

ComponentContext.prototype.access_modifier = function() {
    return this.getTypedRuleContext(Access_modifierContext,0);
};

ComponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterComponent(this);
	}
};

ComponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitComponent(this);
	}
};

ComponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitComponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.ComponentContext = ComponentContext;

lilu_grammarParser.prototype.component = function() {

    var localctx = new ComponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, lilu_grammarParser.RULE_component);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 396;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.PRIVATE) | (1 << lilu_grammarParser.PROTECTED) | (1 << lilu_grammarParser.PUBLIC))) !== 0)) {
            this.state = 395;
            this.access_modifier();
        }

        this.state = 400;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.BOOL:
        case lilu_grammarParser.CONST:
        case lilu_grammarParser.FLOAT:
        case lilu_grammarParser.INT:
        case lilu_grammarParser.STRING:
        case lilu_grammarParser.ID:
            this.state = 398;
            this.variable_def();
            break;
        case lilu_grammarParser.FUNCTION:
        case lilu_grammarParser.LPAREN:
            this.state = 399;
            this.fun_def();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Type_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_type_def;
    return this;
}

Type_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_defContext.prototype.constructor = Type_defContext;

Type_defContext.prototype.TYPE = function() {
    return this.getToken(lilu_grammarParser.TYPE, 0);
};

Type_defContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.ID);
    } else {
        return this.getToken(lilu_grammarParser.ID, i);
    }
};


Type_defContext.prototype.LBRACE = function() {
    return this.getToken(lilu_grammarParser.LBRACE, 0);
};

Type_defContext.prototype.RBRACE = function() {
    return this.getToken(lilu_grammarParser.RBRACE, 0);
};

Type_defContext.prototype.COLON = function() {
    return this.getToken(lilu_grammarParser.COLON, 0);
};

Type_defContext.prototype.component = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ComponentContext);
    } else {
        return this.getTypedRuleContext(ComponentContext,i);
    }
};

Type_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterType_def(this);
	}
};

Type_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitType_def(this);
	}
};

Type_defContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitType_def(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Type_defContext = Type_defContext;

lilu_grammarParser.prototype.type_def = function() {

    var localctx = new Type_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, lilu_grammarParser.RULE_type_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 402;
        this.match(lilu_grammarParser.TYPE);
        this.state = 403;
        this.match(lilu_grammarParser.ID);
        this.state = 406;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.COLON) {
            this.state = 404;
            this.match(lilu_grammarParser.COLON);
            this.state = 405;
            this.match(lilu_grammarParser.ID);
        }

        this.state = 408;
        this.match(lilu_grammarParser.LBRACE);
        this.state = 410; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 409;
            this.component();
            this.state = 412; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.BOOL) | (1 << lilu_grammarParser.CONST) | (1 << lilu_grammarParser.FLOAT) | (1 << lilu_grammarParser.INT) | (1 << lilu_grammarParser.PRIVATE) | (1 << lilu_grammarParser.PROTECTED) | (1 << lilu_grammarParser.PUBLIC) | (1 << lilu_grammarParser.STRING))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (lilu_grammarParser.FUNCTION - 34)) | (1 << (lilu_grammarParser.LPAREN - 34)) | (1 << (lilu_grammarParser.ID - 34)))) !== 0));
        this.state = 414;
        this.match(lilu_grammarParser.RBRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ft_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_ft_def;
    return this;
}

Ft_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ft_defContext.prototype.constructor = Ft_defContext;

Ft_defContext.prototype.type_def = function() {
    return this.getTypedRuleContext(Type_defContext,0);
};

Ft_defContext.prototype.fun_def = function() {
    return this.getTypedRuleContext(Fun_defContext,0);
};

Ft_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFt_def(this);
	}
};

Ft_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFt_def(this);
	}
};

Ft_defContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitFt_def(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Ft_defContext = Ft_defContext;

lilu_grammarParser.prototype.ft_def = function() {

    var localctx = new Ft_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, lilu_grammarParser.RULE_ft_def);
    try {
        this.state = 418;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.TYPE:
            this.enterOuterAlt(localctx, 1);
            this.state = 416;
            this.type_def();
            break;
        case lilu_grammarParser.FUNCTION:
        case lilu_grammarParser.LPAREN:
            this.enterOuterAlt(localctx, 2);
            this.state = 417;
            this.fun_def();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_def;
    return this;
}

DefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefContext.prototype.constructor = DefContext;

DefContext.prototype.ft_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Ft_defContext);
    } else {
        return this.getTypedRuleContext(Ft_defContext,i);
    }
};

DefContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterDef(this);
	}
};

DefContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitDef(this);
	}
};

DefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.DefContext = DefContext;

lilu_grammarParser.prototype.def = function() {

    var localctx = new DefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, lilu_grammarParser.RULE_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 421; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 420;
            this.ft_def();
            this.state = 423; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (lilu_grammarParser.TYPE - 31)) | (1 << (lilu_grammarParser.FUNCTION - 31)) | (1 << (lilu_grammarParser.LPAREN - 31)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_assign;
    return this;
}

AssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignContext.prototype.constructor = AssignContext;

AssignContext.prototype.ASSIGN = function() {
    return this.getToken(lilu_grammarParser.ASSIGN, 0);
};

AssignContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignContext.prototype.variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableContext);
    } else {
        return this.getTypedRuleContext(VariableContext,i);
    }
};

AssignContext.prototype.LPAREN = function() {
    return this.getToken(lilu_grammarParser.LPAREN, 0);
};

AssignContext.prototype.RPAREN = function() {
    return this.getToken(lilu_grammarParser.RPAREN, 0);
};

AssignContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.COMMA);
    } else {
        return this.getToken(lilu_grammarParser.COMMA, i);
    }
};


AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitAssign(this);
	}
};

AssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.AssignContext = AssignContext;

lilu_grammarParser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, lilu_grammarParser.RULE_assign);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 437;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.SUPER:
        case lilu_grammarParser.THIS:
        case lilu_grammarParser.ID:
            this.state = 425;
            this.variable();
            break;
        case lilu_grammarParser.LPAREN:
            this.state = 426;
            this.match(lilu_grammarParser.LPAREN);
            this.state = 427;
            this.variable();
            this.state = 432;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===lilu_grammarParser.COMMA) {
                this.state = 428;
                this.match(lilu_grammarParser.COMMA);
                this.state = 429;
                this.variable();
                this.state = 434;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 435;
            this.match(lilu_grammarParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 439;
        this.match(lilu_grammarParser.ASSIGN);
        this.state = 440;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Unary_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_unary_op;
    return this;
}

Unary_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_opContext.prototype.constructor = Unary_opContext;

Unary_opContext.prototype.SUB = function() {
    return this.getToken(lilu_grammarParser.SUB, 0);
};

Unary_opContext.prototype.BANG = function() {
    return this.getToken(lilu_grammarParser.BANG, 0);
};

Unary_opContext.prototype.TILDE = function() {
    return this.getToken(lilu_grammarParser.TILDE, 0);
};

Unary_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterUnary_op(this);
	}
};

Unary_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitUnary_op(this);
	}
};

Unary_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitUnary_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Unary_opContext = Unary_opContext;

lilu_grammarParser.prototype.unary_op = function() {

    var localctx = new Unary_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, lilu_grammarParser.RULE_unary_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 442;
        _la = this._input.LA(1);
        if(!(_la===lilu_grammarParser.BANG || _la===lilu_grammarParser.TILDE || _la===lilu_grammarParser.SUB)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


lilu_grammarParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 7:
			return this.args_sempred(localctx, predIndex);
	case 8:
			return this.args_variable_sempred(localctx, predIndex);
	case 21:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

lilu_grammarParser.prototype.args_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

lilu_grammarParser.prototype.args_variable_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

lilu_grammarParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 10);
		case 3:
			return this.precpred(this._ctx, 9);
		case 4:
			return this.precpred(this._ctx, 8);
		case 5:
			return this.precpred(this._ctx, 7);
		case 6:
			return this.precpred(this._ctx, 6);
		case 7:
			return this.precpred(this._ctx, 5);
		case 8:
			return this.precpred(this._ctx, 4);
		case 9:
			return this.precpred(this._ctx, 3);
		case 10:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.lilu_grammarParser = lilu_grammarParser;
